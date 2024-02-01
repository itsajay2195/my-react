import React from "react";
import { CLOUDINARY_BASE_URL } from "../utils.js/data";

const ItemCards = ({ data }) => {
  const { imageId } = data?.card?.info;
  console.log("hello", data?.card?.info);
  let title = data?.card?.info?.name;
  let price = data?.card?.info?.price || data?.card?.info?.defaultPrice;
  let description = data?.card?.info?.description;
  return (
    <div className="my-5 flex p-5 justify-between border-b border-gray-100">
      <div className=" flex flex-col flex-[4] items-start ">
        <span className="font-bold text-lg text-left">{title}</span>
        <span className="font-bold text-sm text-gray-350">₹{price / 100}</span>
        <p className="text-left text-sm text-gray-400">{description}</p>
      </div>
      <div className=" h-[100] w-[150] mx-2">
        <div className="relative">
          <img
            className="rounded-lg "
            alt="res-logo"
            src={CLOUDINARY_BASE_URL + imageId}
          />
          <button className="absolute left-6 right-6 bottom-[-10] rounded-lg bg-gray-100 border-2 border-green-300 text-sm">
            Add+
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
