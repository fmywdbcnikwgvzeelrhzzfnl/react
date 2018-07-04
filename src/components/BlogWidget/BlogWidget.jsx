import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

import './BlogWidget.css';

/**
 * Краткое представление поста для списка
 */
export default class BlogWidget extends React.PureComponent {
    render() {
        let {id, name} = this.props;
        //проверка и корректировака входных параметров
        if (typeof name != 'string') name = "";
        else name = name.substring(0, 26);



        return (
            <div className="BlogWidget">
                <Card>
                    <CardImg top width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97180&w=200&h=180" alt="blog image"/>
                    <CardBody className="description">
                        <CardTitle className="postTitle">{name}</CardTitle>
                        <Button className="btn" color="secondary" href={"/blog/"+id}>Open</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}