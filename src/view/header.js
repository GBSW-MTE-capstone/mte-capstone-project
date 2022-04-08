import React from "react";
import "./style/header.css"
import { Widgets, Menu, Search} from '@mui/icons-material';
const Header = () => {
    return(
        <div className="header">
            <div className="left">
                <Search/>
            </div>

            <Widgets className=""/>
            <Menu/>
            <p>아이콘</p>
        </div>
    )
}
export default Header;