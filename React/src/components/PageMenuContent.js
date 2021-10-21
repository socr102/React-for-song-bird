import React, { Component } from "react";

export default class PageMenuContent extends Component {

    constructor(props){
        super(props);

        this.state = {
            Djlistshow: false,
            Eventlistshow: false,
            Songshow: false,
            Musicshow: false,
        }
    }

    handleClickDjlist = () => {
        this.setState({
            Djlistshow: !this.state.Djlistshow,
        });
    }

    handleEventlist = () => {
        this.setState({
            Eventlistshow: !this.state.Eventlistshow,
        });
    }

    handleSong = () => {
        this.setState({
            Songshow: !this.state.Songshow,
        });
    }

    handleMusic = () => {
        this.setState({
            Musicshow: !this.state.Musicshow,
        });
    }
    
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
                        <h4 className="text-primary">Menu list</h4>
                        <hr/>
                        <div className="menu-list">
                            <ul>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="/" className=""> <i className="fa fa-home"></i> home </a>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="#" className="dj-list" onClick={this.handleClickDjlist}> <i className="fa fa-list"></i> DJ List <i className="fa dropdown-icon fa-angle-down color-white"></i></a>
                                    <ul style={{display: this.state.Djlistshow ? "block" : "none"}} className="dropdown-djlist">
                                        <li>
                                            <a href="all-dj-list"> <i className="fa  fa-angle-right color-white"></i> All Dj list</a>
                                        </li>
                                        <li>
                                            <a href="watch-dj-by-id"> <i className="fa  fa-angle-right color-white"></i> Search Dj by id</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="create-dj" className=""> <i className="fa fa-user"></i> Create DJ </a>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="update-dj" className=""> <i className="fa fa-calendar-plus"></i> Update DJ </a>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="delete-dj" className=""> <i className="fa fa-calendar-plus"></i> Delete DJ </a>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="i-am-dj" className=""> <i className="fa fa-calendar"></i> Event </a>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="#" className="dj-list1" onClick={this.handleEventlist}> <i className="fa fa-calendar-check"></i> Event List <i className="fa dropdown-icon fa-angle-down color-white"></i></a>
                                    <ul style={{display: this.state.Eventlistshow ? "block" : "none"}}  className="dropdown-event">
                                        <li>
                                            <a href="all-event-list"> <i className="fa  fa-angle-right color-white"></i> Show a list of all event by certain DJ</a>
                                        </li>
                                        <li>
                                            <a href="search-event-list-by-id"> <i className="fa  fa-angle-right color-white"></i> Show a single event by certain DJ</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="update-event" className=""> <i className="fa fa-calendar-plus"></i> Update Event </a>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="delete-event" className=""> <i className="fa fa-calendar-plus"></i> Delete Event </a>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="#" id="song" onClick={this.handleSong}> <i className="fa fa-volume-up"></i> Song (DJ Playlist) <i className="fa dropdown-icon fa-angle-down color-white"></i></a>
                                    <ul style={{display: this.state.Songshow ? "block" : "none"}}  className="dropdownlist" id="song1">
                                        <li>
                                            <a href="See-the-playlist-of-certain-DJ"> <i className="fa  fa-angle-right color-white"></i> Watch playlist of certain DJ</a>
                                        </li>
                                        <li>
                                            <a href="See-a-single-song-by-id"> <i className="fa  fa-angle-right color-white"></i> Watch single song by id</a>
                                        </li>
                                        <li>
                                            <a href="Add-a-song-to-a-DJ's-playlist"> <i className="fa  fa-angle-right color-white"></i> Add song to Dj's playlist </a>
                                        </li>
                                        <li>
                                            <a href="update-a-song-in-a-DJ's-playlist"> <i className="fa  fa-angle-right color-white"></i> Update song in Dj's playlist</a>
                                        </li>
                                        <li>
                                            <a href="delete-a-song-from-a-DJ's-playlist"> <i className="fa  fa-angle-right color-white"></i> Delete song from Dj's playlist </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="bg-blue2-dark  round-small shadow-huge">
                                    <a href="#" id="music" onClick={this.handleMusic}> <i className="fa fa-music"></i> Music (Event Playlist) <i className="fa dropdown-icon fa-angle-down color-white"></i></a>
                                    <ul style={{display: this.state.Musicshow ? "block" : "none"}}  className="dropdownlist" id="music1">
                                        <li>
                                            <a href="See-the-playlist-certain-DJ"> <i className="fa  fa-angle-right color-white"></i> Watch playlist of certain Event</a>
                                        </li>
                                        <li>
                                            <a href="Add-a-song-to-be-ranked-in-an-event"> <i className="fa  fa-angle-right color-white"></i> Add song to Event </a>
                                        </li>
                                        <li>
                                            <a href="rank-a-song-during-an-event"> <i className="fa  fa-angle-right color-white"></i> Rank a song during an event</a>
                                        </li>
                                        <li>
                                            <a href="delete-song-from-an-event"> <i className="fa  fa-angle-right color-white"></i> Delete song from an ranking </a>
                                        </li>
                                        <li>
                                            <a href="delete-all-song-from-an-event"> <i className="fa  fa-angle-right color-white"></i> Delete all song from an event </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfixed"></div>
                    </div>
                    <div className="menu-hider"></div>
                </div>
            </div>
        );
    }
}