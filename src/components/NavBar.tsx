import React from "react";
import { AppBar, ButtonGroup, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CSS from "csstype";
import { useCart } from "../cart/cartStore";


const NavBar = () => {

    const navBarStyle: CSS.Properties = {
        backgroundColor: "#4CAF50", /* Green background */
        overflow: "hidden", /* Clear floats */
        width: "100%", /* Full width */
    }

    const imageStyle: CSS.Properties = {
        width: "100%",
        height: "auto",
    }

    const ButtonStyle: CSS.Properties = {
        float: "left", /* Align links to the left */
        display: "block", /* Display as block element */
        color: "white", /* White text */
        textAlign: "center", /* Center align text */
        padding: "14px 20px", /* Padding around links */
        textDecoration: "none", /* Remove underline */
        fontFamily: "Arial sans-serif", /* Correct the font-family syntax */
        height: "100%", /* Full height */
    }

    const ButtonStyle2: CSS.Properties = {
        ...ButtonStyle,
        backgroundColor: "#000"
    }

    const pathName = window.location.pathname;

    const getStyle = (name: string) => {
        if (pathName.replace("/rotating_shirt", "") == name) {
            return ButtonStyle2;
        }
        return ButtonStyle;
    }

    const url = import.meta.env.BASE_URL;

    const { cart } = useCart();

    return (
        <div>
            <img src={url + '/images/banner.png'} alt="Header Logo" style={imageStyle}/>
            <AppBar position="static" style={navBarStyle}>
                <Toolbar>
                    <Button 
                        component={Link} 
                        to="/" 
                        style={getStyle('')} 
                        sx={{':hover': { backgroundColor: "#000"}}}>
                            Home</Button>
                    <Button 
                        component={Link} 
                        to="/T-SHIRT-GUIDE" 
                        style={getStyle('/T-SHIRT-GUIDE')} 
                        sx={{':hover': { backgroundColor: "#000"}}}>
                            T-SHIRT GUIDE</Button>
                    <Button component={Link} to="/DESIGN-T-SHIRTS" style={getStyle('/DESIGN-T-SHIRTS')} sx={{':hover': { backgroundColor: "#000"}}}>DESIGN T-SHIRTS&nbsp;</Button>
                    <Button component={Link} to="/CUSTOM-DESIGNER" style={getStyle("/CUSTOM-DESIGNER")} sx={{':hover': { backgroundColor: "#000"}}}>CUSTOM DESIGNER</Button>
                    <div style={{position: "relative"}}>
                        <Button component={Link} to="/CART" style={getStyle("/CART")} sx={{':hover': { backgroundColor: "#000"}}}>CART</Button>
                        <div style={{position: "absolute", top: "0", right: "0", backgroundColor: "red", borderRadius: "50%", width: "25px", height: "25px", color: "white", textAlign: "center"}}>
                            {Object.values(cart).length}
                        </div>
                    </div>
                    <Button component={Link} to="/NEWS" style={getStyle("/NEWS")} sx={{':hover': { backgroundColor: "#000"}}}>NEWS</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;