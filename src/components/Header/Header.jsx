import React from "react";
import {Button} from 'reactstrap';
import ButtonLogin from "../ButtonLogin/ButtonLogin.jsx";
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div>Logo - ReactJS. Lesson3</div>
                <div>
                    <ButtonLogin/>
                </div>

            </header>
        );
    }
}