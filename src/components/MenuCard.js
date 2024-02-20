import React from 'react';
import { MENU_API_IMAGE } from '../utils/CDN_URL';

const MenuCard = (props) => {
  const {name, price, description, imageId} = props?.card?.card?.info;
  return (
        <div className="menuCard mb-2  p-2 flex justify-between w-[800px] border-[1px] border-slate-400 border-solid rounded-lg">
            <div className="w-[600px]">
                <h2 className="text-slate-900 text-lg font-medium">{name}</h2>
                <p className="text-slate-500">₹ {price/100}</p>
                <h3 className="text-sm"> {description} </h3>
            </div>
            <div><img className="w-[150px]" src={MENU_API_IMAGE+imageId} /></div>
        </div>
  )
}

export default MenuCard;
