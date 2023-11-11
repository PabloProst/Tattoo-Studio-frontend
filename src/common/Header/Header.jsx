import React from 'react';
import './Header.css';
import { LinkButton } from '../LinkButton/LinkButton';

export const Header = () => {
    return (
        <div>
            <div className='headerDesign'>
                <div className="logoHead">
                    <img className='headerLogo' src='../src/assets/img/tattooLogo.png' alt="logoHeader" />
                </div>
                <LinkButton
                    path={"/"}
                    title={"Home"}
                />
                <LinkButton
                    path={"/gallery"}
                    title={"Gallery"}
                />
                <LinkButton
                    path={"/login"}
                    title={"Login"}
                />
                <LinkButton
                    path={"/register"}
                    title={"Register"}
                />
            </div>
        </div>
    );
};
