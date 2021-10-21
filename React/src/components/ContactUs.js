import React, { Component } from "react";
import Header from './Header'
import ContactUsContent  from './ContactUsContent';

export default class ContactUs extends Component {
    render() {
        return (
            <>
                <Header />,
                <ContactUsContent />
            </>
        );
    }
}