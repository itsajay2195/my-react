import React from "react";
import { CLOUDINARY_BASE_URL } from "../utils.js/data";

const RestaurantCard = React.memo(({ resData }) => {
  const {
    cuisines,
    name,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CLOUDINARY_BASE_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
});

export default RestaurantCard;
