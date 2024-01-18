import React, { useEffect, useState } from "react";
import { getRestaruatnUrl } from "./data";

const useRestaurantMenu = (resId) => {
  const [data, setData] = useState(null);
  const fetchMenu = async () => {
    let result = await fetch(getRestaruatnUrl(resId));
    const jsonData = await result.json();
    setData(jsonData.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return data;
};

export default useRestaurantMenu;
