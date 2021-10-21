import React, { Component } from "react";

export default class LoginContent extends Component {
    
    render() {
        return (
            <div className="page-content header-clear-large bg-img">
                <div className="content">
                    <form className="form-shadow" id="DJLogin">
                        <div className="text-center bg-color">
                            <h4 className="text-primary">Login</h4>
                            <p>Please enter your DJ Id and password</p>
                        </div>
                        <div className="form-group bg-color">
                            <label>DJ ID:</label>
                            <input 
                                type="number" 
                                min="0" 
                                className="form-control" 
                                placeholder="DJ Id" 
                                required
                                name="djid" 
                            />
                        </div>
                        
                        <div className="form-group bg-color">
                            <label>Password:</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                name="password" 
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <button  id="login" className="button button-full button-l round-small shadow-huge bg-green1-dark  top-30">Login</button>
                        </div>
                    </form>
                </div>
            </div> 
        );
    }
}