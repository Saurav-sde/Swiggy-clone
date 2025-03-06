import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import Restaurant from "./Component/Restaurant";
import { BrowserRouter,Routes,Route } from "react-router";
import RestaurantMenu from "./Component/RestaurantMenu";
import SearchFood from "./Component/SearchFood";
import SecondaryHome from "./Component/SecondaryHome";
import { store } from "./Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./Component/Checkout";

function App(){

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route element={<SecondaryHome/>}>
                            <Route path="/restaurant" element={<Restaurant/>}></Route>
                            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
                            <Route path="/city/delhi/:id/search" element={<SearchFood/>}></Route>
                        </Route>
                        <Route path="/Checkout" element={<Checkout/>}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);