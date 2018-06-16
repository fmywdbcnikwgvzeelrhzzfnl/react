import React from "react";
import '../css/Content.css';
import { Table } from 'reactstrap';

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
                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </article>
            </div>
        );
    }
}