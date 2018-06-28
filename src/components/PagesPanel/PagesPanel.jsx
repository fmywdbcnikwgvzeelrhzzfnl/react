import React from "react";
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './PagesPanel.css';

export default class PagesPanel extends React.PureComponent {
    handleChangePage = (event, newPage) => {
        const {totalPages, downloadPage} = this.props;
        console.log(newPage + " из " + totalPages);
        if (typeof downloadPage === 'function' && newPage >= 1 && newPage <= totalPages)
            downloadPage(newPage);

        event.preventDefault();
    };

    render() {
        const {page, totalPages} = this.props;

        //вычисляем номера страниц, которые должны быть в пагинации
        let items = [];
        let start = page - 2;
        let end = page + 2;
        if (start < 1) start = 1;
        if (end > totalPages) end = totalPages;
        for (let i = start; i <= end; i++) items.push(i);

        return (
            <div className="PagesPanel">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem className={page <= 1 ? "disabled " : ""}>
                        <PaginationLink previous href="#" onClick={event => {
                            this.handleChangePage(event, page - 1)
                        }}/>
                    </PaginationItem>
                    {items.map((item) =>
                        <PaginationItem className={page == item ? "active" : ""}>
                            <PaginationLink href="#" onClick={event => {this.handleChangePage(event, item)}}>
                                {item}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                    <PaginationItem>
                        <PaginationLink next className={(page >= totalPages) ? "disabled " : ""} href="#" onClick={event => {
                                            this.handleChangePage(event, page + 1)
                                        }}/>
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}