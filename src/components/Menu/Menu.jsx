import React from "react";
import './Menu.css';
import classNames from 'classnames';

export default class Menu extends React.Component {

    render() {
        const type = this.props.type;
        const items = this.props.items;
        const className = classNames(
            "menu",
            {
                "horizontalMenu": type === "top",
                "verticalMenu": type === "left" || type === "right",
            }
        );
        return (
            <nav className={className}>
                <ul>
                    {items.map(item => <li><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </nav>
        );
    }
}