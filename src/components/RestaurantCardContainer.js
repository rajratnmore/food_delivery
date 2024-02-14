import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";

const RestaurantCardContainer = (props) => {

    const filteredListOfRestaurant = props.filteredListOfRestaurant;

    return(
        <div className="cardContainer container min-h-96 py-5 flex justify-start flex-wrap"> 
            {
                filteredListOfRestaurant.map( (resCard) => (<RestaurantCard key={resCard.id} resCard={resCard}/>))
            }                
        </div>
    )
}

export default RestaurantCardContainer;