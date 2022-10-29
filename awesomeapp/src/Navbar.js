import React from 'react';

const Navbar = () => {
    return (
        <>
            <header className="header">
                Enemmies ar knocking you doo?
                <p>are you ready?</p>

            </header>
            <nav className="navbar">
                <div className="logo">
                    <img src="./pics/logo.jpg" alt="MyOnlineMeal.com"></img>
                </div>
                <ul>
                    <li className="item"><a href="#home">Home</a></li>
                    <li className="item"><a href="#services-container">Categories</a></li>
                    <li className="item"><a href="#client-section">Shops</a></li>
                    <li className="item"><a href="#contact">Login/sign up</a></li>
                    <input className="search-bar" type="text" name="name" placeholder="search "></input>
                </ul>

            </nav>

        </>


    );
};

export default Navbar;