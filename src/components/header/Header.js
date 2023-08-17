import React from 'react';
import './Header.css';
import Ticker from "../ticker/Ticker";
import logo from '../../assets/logo.jpg';

function Header() {
    return (
        <header className="Header">
            <Ticker/>
            <nav className="nav-section">
                <img src={logo} alt="Smart Gold Logo" className="logo"/>
                <div className="nav-links">
                    <span className="home">Home</span>
                    <span>About Us</span>
                    <div className="dropdown">
                        <span>Precious Metals IRA</span> <span className="arrow">▼</span>
                        <div className="dropdown-content">
                            <span>Invest</span>
                            <span>Rollover</span>
                            <span>Liquidate</span>
                            <span>IRA-Approved Precious Metals</span>
                            <span>Why Gold IRA?</span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <span>Resources</span> <span className="arrow">▼</span>
                        <div className="dropdown-content">
                            <span>Charts/Prices</span>
                            <span>Resource</span>
                            <span>Secure Storage</span>
                            <span>FAQ</span>
                        </div>
                    </div>
                    <span>Contact Us</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
