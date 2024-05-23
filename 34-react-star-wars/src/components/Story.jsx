import React, {Component} from 'react';
import {BASE_URL} from "../utils/constants.js";

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opening_crawl: ""
        }
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({opening_crawl});
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${BASE_URL}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        opening_crawl: data.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
                .catch(e => {
                    console.log(e.message);
                })
        }
    }

    render() {
        if (!this.state.opening_crawl) {
            return (
                <div className="spinner-border text-success"></div>
            )
        } else {
            return (
                <p className="farGalaxy">{this.state.opening_crawl}</p>
            );
        }
    }
}

export default Story;