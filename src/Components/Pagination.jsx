import React from 'react';
import _ from "lodash"; 

const Pagination = props => {
    const pagesCount = Math.ceil(props.length / props.pageSize);
    const pages = _.range(1, pagesCount + 1);
    console.log(props.currentPage);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === props.currentPage ? 'page-item active' : "page-item"}>
                        <a className='page-link' onClick={() => props.onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;