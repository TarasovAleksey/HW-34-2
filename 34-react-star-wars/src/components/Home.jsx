import React, {Component} from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import Story from "./Story.jsx";
const Home = () => {
        return (
                <main className="clearfix">
                    <Hero/>
                    <DreamTeam/>
                    <Story/>
                </main>
        );

}

export default Home;