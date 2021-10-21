import React, {Component} from "react";

export default class HomeContent extends Component{
    render(){
        return(
            <>
                <div className="home-page">
                    <div className="footer-menu footer-5-icons footer-menu-center-icon">
                        <a href="contact-us"><i className="fa fa-envelope"></i><span>Contact</span></a>
                        <a href="notification"><i className="fa fa-star"></i><span>Notification</span></a>
                        <a href="/" className="active-nav"><i className="fa fa-home"></i><span>Home</span></a>
                        <a href="gallery"><i className="fa fa-camera"></i><span>Media</span></a>
                        <a href="page-menu"><i className="fa fa-bars"></i><span>Menu</span></a>
                        <div className="clear"></div>
                    </div>
                    <div className="page-content">
                        <div data-height="cover" className="caption bottom-0">
                            <div className="caption-center center-text left-20 right-20">
                                <div className="content bg-theme round-medium shadow-huge bottom-60 homecontent">
                                    <h1 className="center-text fa-6x color-yellow1-dark bottom-30 top-40"><img src="img/icons/home-pic.png" /></h1>
                                    <h1 className="font-18 bottom-0">DJ-Friend</h1>
                                    <h1 className="font-30 bottom-20"><a href="create-dj">CREATE DJ </a></h1>
                                    <p className="boxed-text-large bottom-30">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>

                            <div className="caption-overlay bg-black opacity-10"></div>

                            <div className="caption-background bg-menu"></div>
                        </div>
                    </div>
                    <div className="menu-hider"></div>
                </div>
            </>
        );
    }
}