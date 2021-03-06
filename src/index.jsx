//react
import React from 'react';
import ReactDom from 'react-dom';   //нужно только в главном компоненте
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//сторонние компоненты и стили
import 'bootstrap/dist/css/bootstrap.min.css'; //http://reactstrap.github.io/
//подключаем fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);

//мои компоненты и стили
import routes from './routes';
import './css/Container.css';

/**
 * Основной класс приложения react
 */
class App extends React.PureComponent {
    /**
     * отвечает за отрисовку страницы
     * и то, что будет помещено в начальный div приложения
     * @returns {*} html, который записывается на страницу
     */
    render() {
        return (
            <BrowserRouter className="container">
                <Switch>
                    {routes.map((route) => <Route {...route}/>)}
                </Switch>
            </BrowserRouter>
        );
    }
}

//отрисовываем главный компонент в DOM страницы
ReactDom.render(
    <App/>
    , document.getElementById("app"));