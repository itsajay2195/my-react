import React from "react";
import { restaurants } from "../utils.js/data";
import RestaurantCard from "./RestaurantCard";

const Body = React.memo(() => {
  const [data, setData] = React.useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_button"
          onClick={() => {
            let filteredData = restaurants.filter(
              (item) => item?.info?.avgRating > 4.4
            );
            setData(filteredData);
          }}
        >
          Top Rated Restaruants
        </button>
      </div>
      <div className="rest-contiainer">
        {data.map((item, index) => (
          <RestaurantCard key={item?.info?.id} resData={item} />
        ))}
      </div>
    </div>
  );
});

export default Body;
