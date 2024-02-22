import { useState, useEffect } from 'react';
import { SWIGGY_API_URL } from './CDN_URL';


const useRestaurantAPI = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

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
            setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => (restaurant.info)));
        }catch(error){
            console.log("Error fetching data: ",error);
        }
    }

  return listOfRestaurant;
}

export default useRestaurantAPI;
