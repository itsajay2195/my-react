import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaruatnUrl } from "../utils.js/data";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import RestaurantCategory from "./RstaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  const [itemIndex, setItemIndex] = useState(0);
  if (!menu) return null;
  const { name, costForTwoMessage, cuisines } =
    menu?.cards[0]?.card?.card?.info;

  let filteredItemCards =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
      return (
        item?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  console.log("filteredItemCards", filteredItemCards);

  const itemCards =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log("itemCards", itemCards);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <h3 className={"font-bold text-lg"}>
        {cuisines.join(", ")} -{costForTwoMessage}
      </h3>
      <div className="mx-auto w-6/12">
        {filteredItemCards.map((item, index) => {
          return (
            <RestaurantCategory
              key={`${item?.card?.card?.title} -${index}`}
              data={item}
              showItems={itemIndex === index}
              setItemIndex={() =>
                itemIndex === index ? setItemIndex(null) : setItemIndex(index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
