import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantCardContainer = (props) => {

    const filteredListOfRestaurant = props.filteredListOfRestaurant;
    
    return(
        <div className="cardContainer container min-h-96 py-5 flex justify-start flex-wrap"> 
            {
                filteredListOfRestaurant.map( (resCard) => (<Link key={resCard.id} to={"/restaurant/"+resCard.id}><RestaurantCard resCard={resCard}/> </Link> ))
            }                
        </div>
    )
}

export default RestaurantCardContainer;