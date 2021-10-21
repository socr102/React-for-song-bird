import React, { Component } from "react";
import validator from 'validator';

export default class CreateDjContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            firstname_valid: false,
            lastname: '',
            lastname_valid: false,
            email: '',
            email_valid: false,
            password: '',
            password_valid: false,
            url: '',
            url_valid: false,
            checked: false,
            checked_valid: false
        }
    }

    handleChange_firstname = (e) => {
        this.setState({
            firstname: e.target.value
        });
    }

    handleChange_lastname = (e) => {
        this.setState({
            lastname: e.target.value
        });
    }

    handleChange_email = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                email_valid: "Please enter a valid email address."
            });
            return true;
        }
        return false;
    }

    handleChange_password= (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleChange_url= (e) => {
        this.setState({
            url: e.target.value
        });
        
    }

    urlValidation = () => {
        if (!validator.isURL(this.state.url)) {
            this.setState({
                url_valid: true,
            })
          } 
    }
    
    handleChangecheck = () => {
        console.log(this.state.checked)
        let {checked} = this.state;
        this.setState({
            checked: !checked,
        });
        console.log(this.state.checked)
        if(this.state.checked === true) this.state.checked_valid = true;
        else this.state.checked_valid = false;
    }

    handleClick = (e) => {
        e.preventDefault();
        if (!this.state.firstname) {
            this.setState({
                firstname_valid: true,
            })
        }
        if(!this.state.lastname) {
            this.setState({
                lastname_valid:true,
            });
        }
        if(!this.state.password) {
            this.setState({
                password_valid:true,
            })
        }
        this.emailValidation();
        this.urlValidation();
        if(this.state.checked === false) this.state.checked_valid = true;
        else this.state.checked_valid = false;
        console.log(this.state.checked_valid)
    }

    render() {
        return (
            <>
                <div className="footer-menu footer-5-icons footer-menu-center-icon">
                    <a href="contact-us"><i className="fa fa-envelope"></i><span>Contact</span></a>
                    <a href="notification"><i className="fa fa-star"></i><span>Notification</span></a>
                    <a href="/"><i className="fa fa-home"></i><span>Home</span></a>
                    <a href="gallery"><i className="fa fa-camera"></i><span>Media</span></a>
                    <a href="page-menu"  className="active-nav"><i className="fa fa-bars"></i><span>Menu</span></a>
                    <div className="clear"></div>
                </div>

                <div className="page-content header-clear-large">
                    <div className="content">
                        <form id="DJCreateForm" method="POST" encType="multipart/form-data">
                            <h4 className="text-primary">Create DJ Account</h4>
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" name="first_name" value={this.state.firstname} onChange={this.handleChange_firstname} />
                                <span style={{display: this.state.firstname_valid ? "block": "none", color: 'red', fontSize: '0.7rem'}}>Please enter your first name</span>
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" name="last_name" onChange={this.handleChange_lastname} />	
                                <span style={{display: this.state.lastname_valid ? "block": "none", color: 'red', fontSize: '0.7rem'}}>Please enter your last name</span>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email id" name="email" onChange={this.handleChange_email}/>	
                                <span style={{display: this.state.email_valid ? "block": "none", color: 'red', fontSize: '0.7rem'}}>Please enter a valid email.</span>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange_password} />	
                                <span style={{display: this.state.password_valid ? "block": "none", color: 'red', fontSize: '0.7rem'}}>Please enter your password</span>
                            </div>

                            <div className="form-group">
                                <label>Website</label>
                                <input type="text" className="form-control" placeholder="Website" name="website" />	
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input type="number" className="form-control" placeholder="Phone" name="phone" />	
                            </div>

                            <div className="form-group">
                                <label>Facebook id</label>
                                <input type="text" className="form-control" placeholder="Facebook id" name="facebook" />	
                            </div>

                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" placeholder="Location" name="location" />	
                            </div><br/>
                            <div className="input-style input-style-1 input-required">
                                <span className="input-style-1-active input-style-1-inactive">About your message</span>
                                <em><i className="fa fa-check color-green1-dark"></i></em>
                                <textarea placeholder="Enter your description" name="about"></textarea>
                            </div>
                            <p className="bottom-20">
                                Upload an image links.
                            </p>

                            <div className="form-group">
                                <input type="url" className="form-control" placeholder="Image url links" name="image" onChange={this.handleChange_url} />
                                <span style={{display: this.state.url_valid ? "block": "none", color: 'red', fontSize: '0.7rem'}}>Please enter a valid URL.</span>	
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="term" onChange={this.handleChangecheck} defaultChecked={this.state.checked} /> Confirm website terms and policy
                                <span style={{display: this.state.checked_valid ? "block": "none", color: 'red', fontSize: '0.7rem'}}>Please accepts the term and policys.</span>
                            </div><hr/>
                            <div className="form-group">
                                <button type="submit" className="button button-full button-l round-small shadow-huge bg-green1-dark  top-30" onClick={this.handleClick}>CREATE ACCOUNT</button>
                            </div>

                        </form>
                        <div className="clearfixed"></div>
                    </div>
                    <div className="menu-hider"></div>
                </div>
            </>
        );
    }
}