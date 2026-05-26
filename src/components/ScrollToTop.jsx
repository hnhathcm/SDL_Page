import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This scrolls the page to the top left (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the URL changes

  return null;
};

export default ScrollToTop;