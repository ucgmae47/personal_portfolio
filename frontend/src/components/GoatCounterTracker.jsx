import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Counts SPA route changes in GoatCounter. The first page load is handled by
// count.js itself; this only fires on client-side navigations.
function GoatCounterTracker() {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const path = location.pathname + location.search + location.hash;
    window.goatcounter?.count?.({ path });
  }, [location]);

  return null;
}

export default GoatCounterTracker;
