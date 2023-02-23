import * as React from "react";
import AppBar from "@mui/material/AppBar";
import favicon from "../images/favicon.png";
import "../ComponentStyles/appbar.css";

const Header = () => {
    return (
        <AppBar className="appbar" position="static">
            <div className="appbar_header">
                <img src={favicon} alt ="firespot"/>
                <div className="appbar_text">EUSL Payment Gateway</div>
            </div>
        </AppBar>
    );
};

export default Header;
