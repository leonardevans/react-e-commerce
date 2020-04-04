import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Super sale" className="navbar-brand" style={{width:50, height:50}}/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav `
background: var(--mainBlue);
.nav-link{
    color: (--mainWhite)!important;
    font-size: 1.3rem;
    // 1rem = 16px
    text-transform: capitalize;
}
`