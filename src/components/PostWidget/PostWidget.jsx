import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

import './PostWidget.css';

/**
 * Краткое представление поста для списка
 */
export default class PostWidget extends React.PureComponent {
    render() {
        let {id, title, text} = this.props;
        //проверка и корректировака входных параметров
        if (typeof title != 'string') title = "";
        else title = title.substring(0, 100);
        if (typeof text != 'string') text = "";
        else text = text.substring(0, 300);

        return (
            <div className="postWidget">
                <Card>
                    <CardImg top width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=600%C3%97180&w=600&h=180"
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle className="postTitle">{title}</CardTitle>
                        <CardText>{text}</CardText>
                        <Button color="primary" href={"/post/"+id}>Read More ...</Button>
                    </CardBody>
                    <CardFooter className="text-muted">
                        Posted on June 6, 2018 by <a href="#">Me</a>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}