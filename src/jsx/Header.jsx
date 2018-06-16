import React from "react";
import '../css/Header.css';
import {Button} from 'reactstrap';
import ButtonLogin from "../jsx/ButtonLogin.jsx";


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