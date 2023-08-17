import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import InfoCard from "./components/info-card/InfoCard";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <InfoCard />
        </div>
    );
}

export default App;
