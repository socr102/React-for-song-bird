import React, { Component } from "react";
import Header from './Header'
import AllDjListContent  from "./AllDjListContent";

export default class AllDjList extends Component {
    render() {
        return (
            <>
                <Header />,
                <AllDjListContent />
            </>
        );
    }
}