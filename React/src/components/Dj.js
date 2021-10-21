import React, { Component } from "react";
import Header from './Header'
import DjContent  from "./DjContent";

export default class Dj extends Component {
    render() {
        return (
            <>
                <Header />,
                <DjContent />
            </>
        );
    }
}