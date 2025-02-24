import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import Restaurant from "./Component/Restaurant";
import { BrowserRouter,Routes,Route } from "react-router";
import RestaurantMenu from "./Component/RestaurantMenu";

function App(){

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/restaurant" element={<Restaurant/>}></Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);