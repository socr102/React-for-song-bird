import React, { Component } from "react";

export default class DjContent extends Component {
    
    render() {
        return (
            <div className="page-content header-clear-large djcontent">
                <div className="content">
                    <div className=" center-text">
                        <a href="create-dj" className=" button  shadow-huge button-l button-round-small bg-blue1-dark create_account_btn">Create Account</a>
                        <a href="login"  className=" button  shadow-huge button-l button-round-small bg-orange-dark login_btn">Login</a>
                    </div>
                </div>
            </div>
        );
    }
}