import React, { useEffect, useState } from "react";
import RestaurantCardContainer from "./RestaurantCardContainer";
import CardSearch from "./CardSearch";

const Body = () => {
    
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    const filteredRestaurantListOnSearch = (searchText) => {
        const filteredRestaurant = listOfRestaurant.filter( (restaurant) => (restaurant.name.toLowerCase().includes(searchText.toLowerCase())));
        setFilteredListOfRestaurant(filteredRestaurant);
    };

    const filteredTopRatedRestaurant = () => {
        setListOfRestaurant(listOfRestaurant.filter( (restaurantCard) => (restaurantCard.avgRating > 4.5)));
    }

    useEffect( () => {
        fetchData();
    }, []);
    

    const fetchData = async () => {
        try{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_");
            const json = await response.json();
            setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => (restaurant.info)));
            setFilteredListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => (restaurant.info)));
        }catch(error){
            console.log("Error fetching data: ",error);
        }           

    };

    if(listOfRestaurant.length == 0){
        return <h1>Page is being loaded</h1>
    }

    return (
        <div className="bg-slate-50 min-h-10 w-full pb-10">
            <CardSearch filteredTopRatedRestaurant={filteredTopRatedRestaurant} filteredRestaurantListOnSearch={filteredRestaurantListOnSearch}/>
            <RestaurantCardContainer filteredListOfRestaurant={filteredListOfRestaurant}/>            
        </div>
    )

}

export default Body;