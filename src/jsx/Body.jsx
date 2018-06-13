import React from "react";
import './Header.css';

export default class Body extends React.Component {
    al(){
        alert("test");
    }

    render() {
        const c_items = this.props.items; //делаем короткую запись для переданных параметров
        return (
            <div onClick={this.al} className="menu">
                <ul>
                    {c_items.map(item=><li><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </div>
        );
    }
}