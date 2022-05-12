import React from "react";
import "./style/header.css"
import { AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import { IoPartlySunny } from "react-icons/io5";
import { Link } from 'react-router-dom';
import moment from "moment";
import 'moment/locale/ko'
export const Header = () => {
    let date =moment().format("dddd")
    let lts =moment().format('LTS')
    function timeTest(){
        let where = moment.locale();
         date = moment().format("dddd")
         lts = moment().format('LTS')
        console.log(date)
        console.log(lts)
    }
    return(
        <div className="header">
            <div className="left">
                <ul>
                    <li className="localName">Useong</li>
                    <li className="nowTab">news</li>
                    <li className="nowDate">{date}</li>
                    <li className="nowTime">{lts}</li>
                    <li> <IoPartlySunny className="icon" onClick={timeTest} /> </li>
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