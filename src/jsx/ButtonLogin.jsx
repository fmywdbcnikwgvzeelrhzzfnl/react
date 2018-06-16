/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import '../css/ButtonLogin.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default class ButtonLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
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
                        Введите логин и пароль:
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