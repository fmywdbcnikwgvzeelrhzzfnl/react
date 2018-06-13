import React from "react";
import '../css/Content.css';

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <article>
                    <h3>Название</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi atque cupiditate
                        dignissimos
                        esse explicabo, illum incidunt magnam maiores molestiae nam nesciunt perspiciatis provident quis
                        reiciendis repudiandae tempore, voluptatem. Officiis.</p>
                </article>
            </div>
        );
    }
}