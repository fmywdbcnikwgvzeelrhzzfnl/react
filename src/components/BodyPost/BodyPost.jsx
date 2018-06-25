import React from "react";

import ContentPost from "components/ContentPost";
import RightPanel from "components/RightPanel";

import './BodyPost.css';

export default class BodyPost extends React.PureComponent {



    render() {
        const {id}=this.props;

        return (
            <div className="BodyPost">
                <ContentPost id={id}/>
            </div>
        );
    }
}