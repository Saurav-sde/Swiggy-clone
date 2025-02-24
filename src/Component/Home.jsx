import Header from "./Header";
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import DineOption from "./DineOption";

export default function Home(){
    return (
        <div className="bg-gray-50">
            <Header/>
            <FoodOption/>
            <GroceryOption/>
            <DineOption/>
        </div>
    )
}