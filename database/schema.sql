-- Portfolio database schema
-- Run this once to set up the database and tables:
--   mysql -u root -p < database/schema.sql

CREATE DATABASE IF NOT EXISTS portfolio
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE portfolio;

-- Stores messages submitted through the contact form.
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
