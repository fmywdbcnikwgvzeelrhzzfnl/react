import React from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import './BreadCrumbs.css';
import { Table } from 'reactstrap';
import PostWidget from "components/PostWidget";

export default class BreadCrumbs extends React.Component {
    render() {
        return (
            <div>

                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                    <BreadcrumbItem active>Page title</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}