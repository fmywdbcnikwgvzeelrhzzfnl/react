import React from 'react';
import ReactDom from 'react-dom';   //нужно только в главном компоненте
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'; //http://reactstrap.github.io/

import './css/Container.css';

const top_menu_items = [
    {
        link: "#",
        title: "Главная"
    },
    {
        link: "#",
        title: "Системы"
    },
    {
        link: "#",
        title: "Проекты"
    },
    {
        link: "#",
        title: "Задачи"
    },
    {
        link: "#",
        title: "Отчеты"
    },
    {
        link: "#",
        title: "Документы"
    },
    {
        link: "#",
        title: "Требования"
    },
];

/**
 * Основной класс приложения react
 */
class App extends React.Component {
    /**
     * отвечает за отрисовку страницы
     * и то, что будет помещено в начальный div приложения
     * @returns {*} html, который записывается на страницу
     */
    render() {
        return (
            <div className="container">
                <Header/>
                <Menu type="top" items={top_menu_items}/>
                <Body items={top_menu_items}/>
                <Footer/>
            </div>
        );
    }
}

//отрисовываем главный компонент в DOM страницы
ReactDom.render(
    <App/>
    , document.getElementById("app"));