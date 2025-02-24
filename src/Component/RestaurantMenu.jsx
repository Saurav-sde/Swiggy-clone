import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu(){
    let id = useParams();
    const [RestData,setRestData] = useState(null);

    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            setRestData();
        }
        fetchData();
    },[])
    
    return(<h1>Hello Coder Army {id}</h1>)
}