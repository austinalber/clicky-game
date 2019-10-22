import React from "react";
import "./Footer.css"

// Styling
const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};
const footerStyle = {
    backgroundColor: "#6CADDC",
    fontSize: "15px",
    textColor: "black",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%"
};

const Footer = () => {
    return (
        <div>
            <div style={phantomStyle}></div>
            <div style={footerStyle}><a href="https://github.com/austinalber/clicky-game">GitHub</a> - <a href="https://austinalber.github.io/portfolio/">Austin Alber</a></div>
        </div>
    );
}

export default Footer;
