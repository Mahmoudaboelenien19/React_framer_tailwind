import { useEffect } from "react";
const useScroll = (bool: boolean) => {
  useEffect(() => {
    if (bool) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [bool]);
};

export default useScroll;
