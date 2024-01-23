import React from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../utils.js/data";
import useOnlinestatus from "../utils.js/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = React.memo(() => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchText, setSearchText] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(
      //   "hello",
      //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    getData();
  }, []);

  let isUSerConnectedToInternet = useOnlinestatus();

  if (isUSerConnectedToInternet === false) {
    return <h1>Looks like you are offline</h1>;
  }
  if (data?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              let filteredData = data.filter((item) =>
                item?.info?.name.toLowerCase().includes(searchText)
              );
              setFilteredData(filteredData);
            }}
          >
            Search
          </button>

          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              let filteredData = data.filter(
                (item) => item?.info?.avgRating > 4.4
              );
              setFilteredData(filteredData);
            }}
          >
            Top Rated Restaruants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredData?.map((item, index) => (
          <Link key={item?.info?.id} to={"/restaurants/" + item?.info?.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
});

export default Body;
