import React, { Component } from "react";

export default class GalleryContent extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            gridstyle1: true,
            gridstyle2: false,
            gridstyle3: false,
        }
    }

    handleClick1 = () => {
        this.setState({
            gridstyle1: true,
            gridstyle2: false,
            gridstyle3: false,
        });
        
    }

    handleClick2 = () => {
        this.setState({
            gridstyle1: false,
            gridstyle2: true,
            gridstyle3: false,
        });
    }

    handleClick3 = () => {
        this.setState({
            gridstyle1: false,
            gridstyle2: false,
            gridstyle3: true,
        });
        console.log(this.state.gridstyle3);
    }

    render() {
        
        if(this.state.gridstyle1) {
            var galleryView = 'gallery-views gallery-view-1';
            var galleryViewControl1 = 'color-highlight gallery-view-1-activate';
            var galleryViewControl2 = 'gallery-view-2-activate';
            var galleryViewControl3 = 'gallery-view-3-activate';
        }
        if (this.state.gridstyle2) {
            var galleryView = 'gallery-views gallery-view-2';
            var galleryViewControl1 = 'gallery-view-1-activate';
            var galleryViewControl2 = 'color-highlight gallery-view-2-activate';
            var galleryViewControl3 = 'gallery-view-3-activate';
        }
        if (this.state.gridstyle3) {
            var galleryView = 'gallery-views gallery-view-3';
            var galleryViewControl1 = 'gallery-view-1-activate';
            var galleryViewControl2 = 'gallery-view-2-activate';
            var galleryViewControl3 = 'color-highlight gallery-view-3-activate';
        }

        return (
            <div id="page">
                <div className="footer-menu footer-5-icons footer-menu-center-icon">
                    <a href="contact-us"><i className="fa fa-envelope"></i><span>Contact</span></a>
                    <a href="notification"><i className="fa fa-star"></i><span>Notification</span></a>
                    <a href="/"><i className="fa fa-home"></i><span>Home</span></a>
                    <a href="gallery" className="active-nav"><i className="fa fa-camera"></i><span>Media</span></a>
                    <a href="page-menu"><i className="fa fa-bars"></i><span>Menu</span></a>
                    <div className="clear"></div>
                </div>
                <div className="page-content header-clear-large">
                <div className="content">
                    <p>
                        Change the view of your gallery and activate different sizes and shapes.
                    </p>
                </div>
                <div className="divider divider-margins bottom-0"></div>
                <div className="content gallery-view-controls">
                    <a href="#" className={galleryViewControl1} onClick={this.handleClick1} ><i className="fa fa-th"></i></a>
                    <a href="#" className={galleryViewControl2} onClick={this.handleClick2}><i className="fa fa-th-large"></i></a>
                    <a href="#" className={galleryViewControl3} onClick={this.handleClick3}><i className="fa fa-bars"></i></a>
                    <div className="clear"></div>
                </div>
                <div className="content bottom-15">
                    <div className={galleryView}>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>
                        <a className="default-link" data-lightbox="gallery-1" href="img/dj-list2.png" title="Vynil and Typerwritter">
                            <img src="img/dj-list2.png" data-src="img/dj-list2.png" className="preload-image shadow-huge responsive-image" alt="img" />
                            <div className="caption">
                                <h4 className="bottom-0 color-theme">Messy Desk?</h4>
                                <p>Some may consider this to be a very messy desk.</p>
                                <div className="divider bottom-0"></div>
                            </div>
                        </a>



                    </div>
                    <div className="clear"></div>
                </div>
            </div>
            <div className="menu-hider"></div>
            </div>
        );
    }
}