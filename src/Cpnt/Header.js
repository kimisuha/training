import logo from '../logo.svg';
import React, { Component } from 'react';
import '../Css/Head.css'

class Header extends Component {
    render() {
        return (
            <div className='row head'>
                <div className='col-3 logo'>
                    <img className='img img-fluid' src={logo} alt='test'></img>
                </div>

                <div className='col-9 title'>
                    <h1>title of app!</h1>
                    <p>this app was created to training reactjs</p>
                </div>
            </div>
        );
    }
}

export default Header;