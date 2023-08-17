import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>SmartGold.com</h1>
                <ul>
                    <li>Smart Money is Moving Into Gold With SmartGold</li>
                    <li>Industry Leader Serving Precious Metals Investors</li>
                    <li>Contact SmartGold.com now!</li>
                </ul>
                <button className="yellow-button">Contact Us</button>
            </div>
        </div>
    );
}

export default Banner;