import React from 'react'
import { Pagination, Form, Col } from 'react-bootstrap'

export default function PaginationMenu(props) {
    const { onSetLimit, onSetPage, page, totalResult, limit } = props
    let lastPage = Math.ceil(totalResult / limit)
    let prevPage, nextPage, pagePlusOne, pagePlusTwo, pageMinusOne, pageMinusTwo, lastPagination, firstPagination, activePagination

    prevPage = page !== 1 ? <Pagination.Prev onClick={() => onSetPage(Number(page - 1))} /> : <Pagination.Prev disabled />

    nextPage = page < lastPage ? <Pagination.Next onClick={() => onSetPage(Number(page + 1))} /> : <Pagination.Next disabled />

    pageMinusOne = page !== 1 ? <Pagination.Item onClick={() => onSetPage(Number(page - 1))}>{page - 1}</Pagination.Item> : ""

    pageMinusTwo = page !== 1 && page !== 2 ? <Pagination.Item onClick={() => onSetPage(Number(page - 2))}>{page - 2}</Pagination.Item> : ""

    pagePlusOne = lastPage >= page + 1 ? <Pagination.Item onClick={() => onSetPage(Number(page + 1))}>{page + 1}</Pagination.Item> : ""

    pagePlusTwo = lastPage >= page + 2 ? <Pagination.Item onClick={() => onSetPage(Number(page + 2))}>{page + 2}</Pagination.Item> : ""

    lastPagination = <Pagination.Last onClick={() => onSetPage(lastPage)} />

    firstPagination = <Pagination.First onClick={() => onSetPage(1)} />

    activePagination = <Pagination.Item active>{page}</Pagination.Item>
    return (
        <div>
            <br />

            <Form.Row className="pagination justify-content-center">
                <Col >
                    <Form.Group>
                        <Col md="auto">
                            <Form.Control as="select" onChange={(e) => onSetLimit(e.target.value)}>
                                <option value="3">Show Per Page default 3</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                                <option value="10">10</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Pagination >
                            {firstPagination}
                            {prevPage}
                            {pageMinusTwo}
                            {pageMinusOne}
                            {activePagination}
                            {pagePlusOne}
                            {pagePlusTwo}
                            {nextPage}
                            {lastPagination}
                        </Pagination>
                    </Form.Group>
                </Col>
            </Form.Row>
        </div>
    )
}
