import React, { Component } from "react";

export default class NotificationContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggle1: true,
            toggle2: true,
            toggle3: true,
            toggle4: true,
        }
    }

    handleClick1 = () => {
        this.setState({
            toggle1: !this.state.toggle1,
        })
        console.log(this.state.toggle1)
        return this.state.toggle1;
    }

    handleClick2 = () => {
        this.setState({
            toggle2: !this.state.toggle2,
        })
        console.log(this.state.toggle2)
        return this.state.toggle2;
    }

    handleClick3 = () => {
        this.setState({
            toggle3: !this.state.toggle3,
        })
        console.log(this.state.toggle3)
        return this.state.toggle3;
    }

    handleClick4 = () => {
        this.setState({
            toggle4: !this.state.toggle4,
        })
        console.log(this.state.toggle4)
        return this.state.toggle4;
    }

    render() {
        return (
            <>
                <div id="page">
                    <div className="footer-menu footer-5-icons footer-menu-center-icon">
                        <a href="contact-us"><i className="fa fa-envelope"></i><span>Contact</span></a>
                        <a href="notification" className="active-nav"><i className="fa fa-star"></i><span>Notification</span></a>
                        <a href="/"><i className="fa fa-home"></i><span>Home</span></a>
                        <a href="gallery"><i className="fa fa-camera"></i><span>Media</span></a>
                        <a href="page-menu"><i className="fa fa-bars"></i><span>Menu</span></a>

                        <div className="clear"></div>
                    </div>
                    <div className="page-content header-clear-large">
                        <div className="content">
                            <h4 className="text-primary">Notification message</h4>
                            <div className="clearfixed"></div>
                            <div className="alert alert-small round-small shadow-huge bg-green1-dark notification1" onClick={this.handleClick1} style={{display: this.state.toggle1 === true ? "block" : "none"}}>
                                <i className="fa fa-check"></i>
                                <span>Everything's okay here1</span>
                                <i className="fa fa-times "></i>
                            </div>
                            <div className="alert alert-small round-small shadow-huge bg-green1-dark notification2" onClick={this.handleClick2} style={{display: this.state.toggle2 === true ? "block" : "none"}}>
                                <i className="fa fa-check"></i>
                                <span>Everything's okay here2</span>
                                <i className="fa fa-times "></i>
                            </div>
                            <div className="alert alert-small round-small shadow-huge bg-green1-dark notification3" onClick={this.handleClick3} style={{display: this.state.toggle3 === true ? "block" : "none"}}>
                                <i className="fa fa-check"></i>
                                <span>Everything's okay here3</span>
                                <i className="fa fa-times "></i>
                            </div>
                            <div className="alert alert-small round-small shadow-huge bg-green1-dark notification4" onClick={this.handleClick4} style={{display: this.state.toggle4 === true ? "block" : "none"}}>
                                <i className="fa fa-check"></i>
                                <span>Everything's okay here4</span>
                                <i className="fa fa-times "></i>
                            </div>

                            <div className="clearfixed"></div>

                        </div>
                        <div className="menu-hider"></div>
                    </div>
                </div>
            </>
        );
    }
}