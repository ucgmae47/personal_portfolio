"""Database access layer.

Uses a MySQL connection pool so we reuse a small set of connections instead of
opening a brand-new TCP connection on every request (which is slow and can
exhaust the database). The pool is created lazily on first use so the app can
still start up even if the database isn't reachable yet.
"""

import os
from mysql.connector import pooling
from dotenv import load_dotenv

load_dotenv()

_pool = None


def _get_pool():
    """Create the connection pool once, then reuse it."""
    global _pool
    if _pool is None:
        _pool = pooling.MySQLConnectionPool(
            pool_name="portfolio_pool",
            pool_size=5,
            host=os.getenv("DB_HOST", "localhost"),
            port=int(os.getenv("DB_PORT", "3306")),
            user=os.getenv("DB_USER", ""),
            password=os.getenv("DB_PASSWORD", ""),
            database=os.getenv("DB_NAME", ""),
        )
    return _pool


def get_connection():
    """Borrow a connection from the pool.

    Callers MUST close the connection when done (conn.close() returns it to the
    pool rather than actually closing it).
    """
    return _get_pool().get_connection()
