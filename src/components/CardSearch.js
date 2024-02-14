import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CardSearch = (props) => {

    const [searchText, setSearchText] = useState("");
    
    return (
        <div className="container h-20 p-5 flex justify-center">
                <button className="bg-slate-400 px-5 rounded-lg text-white font-medium hover:text-orange-400 hover:bg-slate-300 tracking-wider" onClick={
                    () => {
                        props.filteredTopRatedRestaurant();                                           
                    }
                }>top rated restaurant</button>
                <div className="mx-2 flex shadow-2xl">
                    <FontAwesomeIcon className="bg-white  p-[10px] text-xl rounded-l-lg" icon={faMagnifyingGlass} />
                    <input className="bg-white w-96 rounded-r-lg h-full border-none outline-none text-slate-700 text-lg" type="search" value={searchText} onChange={(event) => {
                        setSearchText(event.target.value);
                    }}/>
                </div>
                <button className="bg-slate-400 px-5 w-28 rounded-lg text-white font-medium hover:text-orange-400 hover:bg-slate-300 tracking-wider" onClick={() => {
                    props.filteredRestaurantListOnSearch(searchText);
                    setSearchText("");
                }}>search</button>
            </div>
    )
}

export default CardSearch;

