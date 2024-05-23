import React, {Component} from 'react';
import {BASE_URL} from "../utils/constants.js";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const character = JSON.parse(localStorage.getItem("character"));
        if (character) {
            this.setState(
                {
                    isLoading: false,
                    character
                }
            )
        } else {
            fetch(`${BASE_URL}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const hero = {
                        name: data.name,
                        eye_color: data.eye_color,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        image: `${BASE_URL}/${data.image}`
                    };
                    this.setState(
                        {
                            isLoading: false,
                            character: hero
                        }
                    )
                    localStorage.setItem("character", JSON.stringify(hero))
                })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="spinner-border text-success"></div>
            )
        } else {
            return (
                <div>
                    <h1>Name:{this.state.character.name}</h1>
                    <h2>eye_color: {this.state.character.eye_color}</h2>
                    <h3>gender: {this.state.character.gender}</h3>
                    <h4>birth_year: {this.state.character.birth_year}</h4>
                    {/*<h5>image: {this.state.character.image}</h5>*/}
                    <img src={this.state.character.image} alt={'hero'}/>
                </div>
            );
        }
    }
}

export default AboutMe;