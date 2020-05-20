import React, { Component } from 'react';

//import './MainWindow.css'

class Header extends Component {
    render() {

        const headerStyle = {
            color: "#FFF",
            fontFamily: "Times New Roman"
        };

        return (
            <div style={headerStyle}>
                <h1>Music Album Collector</h1>
            </div>
        )
    }
}

export default Header
