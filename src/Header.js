import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  './header.css';

class Header extends Component {
    state = {};
    render() {
        return (
            <header>
                <NavLink exact to ='/' className='nav'>
                    Home
                </NavLink>
                <NavLink to = '/create' className='nav'>
                    Add Chord
                </NavLink>
            </header>
        );
    }
}

export default Header;