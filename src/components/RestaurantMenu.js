import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaruatnUrl } from "../utils.js/data";

const RestaurantMenu = () => {
  const [menu, setData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(getRestaruatnUrl(10576));
    const jsonData = await data.json();
    setData(jsonData.data);
  };
  if (!menu) return null;
  const { name, costForTwoMessage, cuisines } =
    menu?.cards[0]?.card?.card?.info;

  const itemCards =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log("itemCards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} -{costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((item, index) => (
          <li key={`${item?.card?.info?.name}-${index.toString()}`}>
            {item?.card?.info?.name} -{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}{" "}
            INR
          </li>
        ))}
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>Burgers</li>
        <li>Diet coke</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
