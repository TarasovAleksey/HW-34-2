import React, {Component} from 'react';
import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

// TODO Class -> func
class DreamTeam extends Component {
    render() {
        return (
            <section className="float-end w-50 row border mx-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                {friends.map((f,i)=> <Friend key={i} friendPhoto={f} pos={i+1}/>)}
            </section>
        );
    }
}

export default DreamTeam;