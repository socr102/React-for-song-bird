import React, { Component } from "react";

export default class ContactUsContent extends Component {
    
    render() {
        return (
            <div id="page">
                <div className="footer-menu footer-5-icons footer-menu-center-icon">
                    <a href="contact-us" className="active-nav"><i className="fa fa-envelope"></i><span>Contact</span></a>
                    <a href="notification"><i className="fa fa-star"></i><span>Notification</span></a>
                    <a href="/"><i className="fa fa-home"></i><span>Home</span></a>
                    <a href="gallery"><i className="fa fa-camera"></i><span>Media</span></a>
                    <a href="page-menu"><i className="fa fa-bars"></i><span>Menu</span></a>

                    <div className="clear"></div>
                </div>
                <div className="page-content header-clear-large" style={{paddingTop: '60px'}}>
                    <div className="content">
                        <form className="form-shadow" action="#">

                            <h4 className="text-primary">Let's get in Touch</h4>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" name="" required />
                            </div>

                            <div className="form-group">
                                <label> Name</label>
                                <input type="text" className="form-control" placeholder="Name" name="" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email id" name="" required />
                            </div>

                            <br/>
                            <div className="input-style input-style-1 input-required">
                                <span className="input-style-1-active input-style-1-inactive">About your message</span>
                                <em><i className="fa fa-check color-green1-dark"></i></em>
                                <textarea placeholder="Enter your description"></textarea>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="button button-full button-l round-small shadow-huge bg-green1-dark  top-30"> Send message</button>

                            </div>
                        </form>
                        <div className="clearfixed"></div>
                    </div>
                    <div className="menu-hider"></div>
                </div>
            </div>
        );
    }
}