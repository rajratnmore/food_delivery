import { useEffect, useState } from "react";
import { MENU_API } from "./CDN_URL";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            const response = await fetch(MENU_API + resId);
            if(!response.ok){
                throw new Error("Failed to fetch data");
            }
            const json = await response.json();
            setResInfo(json);
        }catch(error){
            console.log("error msg here ", error);
        }
    }

    return resInfo;
}

export default useRestaurantMenu;