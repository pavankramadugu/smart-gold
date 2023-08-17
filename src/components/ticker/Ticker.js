import React from 'react';
import './Ticker.css';

const Ticker = () => {
    const tickerData = [
        {
            name: 'Gold',
            price: '$1,800',
            costChange: '+$10'
        },
        {
            name: 'Silver',
            price: '$25',
            costChange: '-$0.50'
        },
        {
            name: 'Platinum',
            price: '$1,050',
            costChange: '+$5'
        },
        {
            name: 'Palladium',
            price: '$2,200',
            costChange: '+$15'
        },
    ];

    const renderTickerItems = () => (
        tickerData.map((data, index) => (
            <div className="ticker-item" key={index}>
                <span className="name">{data.name}</span>
                <span className="price">{data.price}</span>
                <span className="costChange" style={{ color: data.costChange.startsWith('+') ? 'green' : 'red' }}>
                    {data.costChange}
                </span>
            </div>
        ))
    );

    return (
        <div className="ticker">
            <div className="ticker-content">
                {renderTickerItems()}
                {renderTickerItems()}
                {renderTickerItems()}
                {renderTickerItems()}
            </div>
        </div>
    );
}

export default Ticker;
