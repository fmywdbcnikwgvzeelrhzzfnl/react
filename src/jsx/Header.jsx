import React from "react";
import './css/Header.css';

export default class Header extends React.Component {
    render() {
        const c_items = this.props.items; //делаем короткую запись для переданных параметров
        return (
            <header className="header">
                <ul>
                    {c_items.map(item => <li><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </header>
        );
    }
}