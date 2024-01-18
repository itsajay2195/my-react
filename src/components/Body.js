import React from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../utils.js/data";
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

  if (data?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="Search"
            onClick={() => {
              let filteredData = data.filter((item) =>
                item?.info?.name.toLowerCase().includes(searchText)
              );
              setFilteredData(filteredData);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter_button"
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
      <div className="rest-contiainer">
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
