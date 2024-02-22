import React, { useEffect, useState } from "react";
import RestaurantCardContainer from "./RestaurantCardContainer";
import CardSearch from "./CardSearch";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API_URL } from "../utils/CDN_URL";

const Body = () => {
    
    // const listOfRestaurant = useRestaurantAPI();
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const [cart, setCart] = useState(15);
    
    const filteredRestaurantListOnSearch = (searchText) => {
        const filteredRestaurant = listOfRestaurant.filter( (restaurant) => (restaurant.name.toLowerCase().includes(searchText.toLowerCase())));
        setFilteredListOfRestaurant(filteredRestaurant);
    };

    const filteredTopRatedRestaurant = () => {
        setFilteredListOfRestaurant(listOfRestaurant.filter( (restaurantCard) => (restaurantCard.avgRating >= 4)));
    }

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            const response = await fetch(SWIGGY_API_URL);
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const json = await response.json();
            const jsonResponse = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => (restaurant.info))
            setListOfRestaurant(jsonResponse);
            setFilteredListOfRestaurant(jsonResponse);
        }catch(error){
            console.log("Error fetching data: ",error);
        }
    }

    const fetchDataAgain = async () => {
        try{
            const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&offset=${cart}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const json = await response.json();
            const jsonResponse = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => (restaurant.info))
            setListOfRestaurant((prev) => [...prev, ...jsonResponse]);
            setFilteredListOfRestaurant((prev) => [...prev, ...jsonResponse]);            
        }catch(error){
            console.log("Error fetching data: ",error);
        }
    }

    useEffect( () => {
        fetchDataAgain();
    },[cart]);

    const handelInfiniteScroll = async () => {
        try {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
          ) {
            setCart((prev) => prev + 16);
          }
        } catch (error) {
            console.log("Error fetching data: ",error);
        }
      };

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
      }, []);
    
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return <h1>Looks like you are offline ! Please check your internet connection</h1>
    }

    if(listOfRestaurant.length == 0){
        return (<Shimmer />)
    }

    return (
        <div className="bg-slate-50 min-h-10 w-full pb-10">
            <CardSearch filteredTopRatedRestaurant={filteredTopRatedRestaurant} filteredRestaurantListOnSearch={filteredRestaurantListOnSearch}/>
            <RestaurantCardContainer filteredListOfRestaurant={filteredListOfRestaurant}/>            
        </div>
    )

}

export default Body;