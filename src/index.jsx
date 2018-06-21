import React from 'react';
import ReactDom from 'react-dom';   //нужно только в главном компоненте
import PageHome from 'pages/PageHome';
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
                <PageHome/>
            </div>
        );
    }
}

//отрисовываем главный компонент в DOM страницы
ReactDom.render(
    <App/>
    , document.getElementById("app"));