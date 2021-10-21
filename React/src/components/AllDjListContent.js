import React, { Component } from "react";

export default class AllDjListContent extends Component {
    
    render() {
        return (
            <div id="page">
                <div className="footer-menu footer-5-icons footer-menu-center-icon">
                    <a href="contact-us"><i className="fa fa-envelope"></i><span>Contact</span></a>
                    <a href="notification"><i className="fa fa-star"></i><span>Notification</span></a>
                    <a href="/"><i className="fa fa-home"></i><span>Home</span></a>
                    <a href="gallery"><i className="fa fa-camera"></i><span>Media</span></a>
                    <a href="page-menu" className="active-nav"><i className="fa fa-bars"></i><span>Menu</span></a>

                    <div className="clear"></div>
                </div>
                <div className="page-content header-clear-large">
                    <div className="content">
                        <h4 className="text-primary">List of all event by certain DJ</h4>


                        <div id="DJlist"></div>

                        <div className="clearfixed"></div>
                        <hr/>
                        <div className="pagination"></div>
                    </div>
                    <div className="clearfixed"></div>
                    <div className="clearfixed"></div>
                </div>
                <div className="menu-hider"></div>
            </div> 
        );
    }
}