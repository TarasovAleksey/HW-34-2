import React, {Component} from 'react';
import Navigation from "./Navigation.jsx";
// TODO Class -> func
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Navigation changePage={this.props.changePage}/>
                <h1 className="text-center py-4">Luke Skywalker</h1>
            </header>
        );
    }
}

export default Header;