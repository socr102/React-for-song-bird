import React, { Component } from "react";
import Header from './Header'
import PageMenuContent  from "./PageMenuContent";

export default class PageMenu extends Component {
    render() {
        return (
            <>
                <Header />,
                <PageMenuContent />
            </>
        );
    }
}