import React, { useState } from 'react';
import './Menu.css';
import logo from "./raffs-food.png";
import NumPpl from '../NumPpl/People.js';

const Menu = () => {
    // array for the menu items
    const snacks = ["GARLIC BREADSTICKS", "WARM OLIVES", "ARUGALA SALAD", "BURRATA", "PROSCIUTTO CON L'UVA"];
    const snacks_price = [13, 8, 10, 16, 13];
    const pizza = ["MARGHERITA", "PEPPERONI", "VODKA", "TRUFFLE MUSHROOM", "FRENCH FIG", "THE ANNEX", "DIPPING SAUCE"];
    const pizza_price = [20, 21, 22, 23, 24, 2.50];
    const dessert = ["APPLEBERRYCRUMBLE", "FRENCH BRIOCHE", "TIRAMISU"];
    const dessert_price = [7,6,8];

    // information about the people
    const [numberOfPeople, setNumberOfPeople] = useState(3);
    const [peopleNames, setPeopleNames] = useState(Array(numberOfPeople).fill(""));
    
    // get person name
    const nameChange = (index, newName) => {
        const updatedNames = [...peopleNames];
        updatedNames[index] = newName;
        setPeopleNames(updatedNames);
    }


    return (
        <div className="items">
            <a href="#" className="raffs">
                <img src={logo} alt="Logo" className="raffs-logo" />
            </a>

            <div className="tabs">
                <div className="tabs active-tabs">Name 1</div>
                <div className="tabs">Name 2</div>
                <div className="tabs">Name 3</div>
                <div className="tabs">Name 4</div>
            </div>

            <div className="menu">
            </div>


        </div>
    );
};

export default Menu;