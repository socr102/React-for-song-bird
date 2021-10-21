import React, { Component } from "react";
import Header from './Header'
import NotificationContent  from "./NotificationContent";

export default class Notification extends Component {
    render() {
        return (
            <>
                <Header />,
                <NotificationContent />
            </>
        );
    }
}