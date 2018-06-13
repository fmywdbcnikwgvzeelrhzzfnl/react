import React from "react";
import './css/Footer.css';

export default class Footer extends React.Component {
    al(){
        alert("test");
    }

    render() {
        const c_items = this.props.items; //делаем короткую запись для переданных параметров
        return (
            <footer onClick={this.al} className="menu">
                <ul>
                    {c_items.map(item=><li><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </footer>
        );
    }
}