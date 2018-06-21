/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import './ButtonLogin.css';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    Input,
    InputGroupAddon,
    Form,
    FormGroup,
    Label
} from 'reactstrap';


export default class ButtonLogin extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        };
    }

    /**
     * Обработчик
     */
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle} className="buttonLogin">Войти</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="buttonLogin_Modal">
                    <ModalHeader toggle={this.toggle}>Войти</ModalHeader>
                    <ModalBody>
                        <Form>
                            <div>
                                Введите логин и пароль:
                            </div>
                            <br/>
                            <FormGroup>
                                <Label for="login">Логин</Label>
                                <Input type="text" name="login" id="login" placeholder="login"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Пароль</Label>
                                <Input type="password" name="password" id="password"
                                       placeholder="password"/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Войти</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Отмена</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}