import React from 'react';
import {navItems} from "../utils/constants.js";
import NavItem from "./NavItem.jsx";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navItems.map((item,index)=> <NavItem
                    changePage={changePage} key={index} itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;