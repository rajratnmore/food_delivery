import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {CDN_URL} from "../utils/CDN_URL";

const RestaurantCard = (props) => {
    const resCard = props.resCard;
    const {cloudinaryImageId, name, avgRating, cuisines, areaName, sla, costForTwo} = resCard;

    return (
        <div className="w-72 rounded-t-3xl rounded-b-xl mt-5 mx-2">
            <div className="rounded-3xl mb-2">
                <img className="rounded-3xl w-72 h-52" src={CDN_URL+cloudinaryImageId} />
            </div>
            <div className="px-4 pb-4"> 
                <h2 className="text-lg font-medium">{name}</h2>
                <h3 className="text-base font-medium"><FontAwesomeIcon className="text-slate-400" icon={faStar} /> {avgRating}  {" - " + sla.slaString}</h3>
                <p className="font-base tracking-wider text-slate-900 mt-2">{costForTwo}</p>
                <p className="font-light">{cuisines.join(", ")}</p>
                <p className="font-base tracking-wider text-slate-600">{areaName}</p>
            </div>
        </div>
    )

}

export default RestaurantCard;