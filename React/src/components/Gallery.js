import React, { Component } from "react";
import Header from './Header'
import GalleryContent  from "./GalleryContent";

export default class Gallery extends Component {
    render() {
        return (
            <>
                <Header />,
                <GalleryContent />
            </>
        );
    }
}