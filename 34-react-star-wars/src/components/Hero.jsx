import React, {Component} from 'react';
import mainHero from '../Images/main.jpg';
// TODO Class -> func
class Hero extends Component {
    render() {
        return (
            <section className="float-start me-3 w-25">
                <img className="w-100" src={mainHero} alt="hero"/>
            </section>
        );
    }
}

export default Hero;