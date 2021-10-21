import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="header header-fixed header-logo-app">
                <a href="/" className="back-button header-title">Back to pages</a>
                <a href="/" className="header-icon header-icon-1 back-button"><i className="fas fa-arrow-left"></i></a>
                <a href="/" className="header-icon header-icon-2" data-toggle-theme><i className="fa fa-moon"></i></a>
            </div>
        );
    }
}