import React, { Component } from "react";
import Header from './Header'
import CreateDjContent  from "./CreateDjContent";

export default class CreateDj extends Component {
    render() {
        return (
            <>
                <Header />,
                <CreateDjContent />
            </>
        );
    }
}