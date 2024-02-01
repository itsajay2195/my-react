import React, { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, showItems, setItemIndex }) => {
  let title = data?.card?.card?.title;
  let itemCards = data?.card?.card?.itemCards;
  const [collapse, setCollapse] = useState(true);
  return (
    <div>
      <div
        onClick={() => setItemIndex()}
        className=" bg-gray-50 my-4 py-4 flex px-2 justify-between"
      >
        <span>{title}</span>
        <button onClick={() => setItemIndex()}>🔽</button>
      </div>
      {showItems && (
        <div>
          {itemCards.map((item) => {
            return <ItemCards key={data?.card?.info?.id} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
