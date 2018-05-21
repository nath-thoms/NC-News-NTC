import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {


    render() {
        return (
            <div>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Northcoders News</h5>
                                <p className="grey-text text-lighten-4">You are logged in as: {this.props.loggedIn} </p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <Link to="/"> <h5 className="white-text">Logout</h5></Link>


                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>

            </div>

        )
    }
}




export default Footer;