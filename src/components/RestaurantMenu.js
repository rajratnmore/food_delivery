import React from 'react';
import MenuCard from './MenuCard';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null){
        return (<Shimmer />)
    }
    console.log("resinfo is :", resInfo);
    const { name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemCardsFirst = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const itemCardsSecond = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    let itemCards;
    if(itemCardsFirst === undefined && itemCardsSecond === undefined){
        itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;        
    }else{
        itemCards = (itemCardsFirst !== undefined) ? itemCardsFirst : itemCardsSecond ;
    }
    
    return (
        <>
            <div className="menuContainer flex flex-wrap justify-center">
                <div className="menuCard mb-2  p-2 flex justify-between w-[800px]">
                    <div className="pb-2">
                        <h2 className="text-xl mb-1 font-semibold tracking-wide">{name}</h2>
                        <h3 className="text-sm">{cuisines.join(", ")}</h3>
                        <h3 className="text-sm">{costForTwoMessage}</h3>        
                    </div>
                </div> 
                {
                    itemCards.map( (card) => (<MenuCard key={card.card.info.id} card={card} /> ))
                }
            </div>
        </>
  ) 
}

export default RestaurantMenu;
