import React from "react";
import "./style/header.css"
import { AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import { IoPartlySunny } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className="header">
            <div className="left">
                <ul>
                    <li className="localName">Useong</li>
                    <li className="nowTab">news</li>
                    <li className="nowDate">2022 / 04 / 07</li>
                    <li className="nowTime">13 : 36 : 45</li>
                    <li> <IoPartlySunny className="icon"/> </li>
                    {/* test router link */}
                    <li><Link to="/"> go home </Link></li>
                    <li><Link to="/board"> go board </Link></li>
                </ul>
            </div>
            <div>
                <AiOutlineMenu className="lightIcon icon" onClick={()=>{console.log("click Menu!")}} />
                <AiOutlineSearch className="lightIcon icon" onClick={()=>{console.log("click Search")}}/>
            </div>
        </div>
    )
}
export default Header;