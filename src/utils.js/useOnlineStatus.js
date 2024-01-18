import { useEffect, useState } from "react";

const useOnlinestatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);
  return status;
};

export default useOnlinestatus;
