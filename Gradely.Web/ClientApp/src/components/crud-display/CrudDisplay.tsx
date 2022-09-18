import React, {Component, useState} from 'react';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    Row,
    Table
} from "reactstrap";
import SearchBar from "./SearchBar";

type CrudDisplayProps = {
    name: string;
    columns?: string[];
    data?: any[];
    create?: CrudAction;
    actions?: CrudActions;
}

type CrudDisplayState = {
    itemsPerPage: number;
    currentPage: number;
    dataLength: number;
    pageCount:  number;
    filter: string;
    itemsPerPageOpen: boolean;
    filteredData: any[];
}

export type CrudAction = {
    name: string;
    color: string;
    action: (id: number, onComplete: () => void) => void;
}

export type CrudActions = {
    actions: CrudAction[];
}

class CrudDisplay extends React.Component<CrudDisplayProps, CrudDisplayState> {

    state = {
        itemsPerPage: 10,
        currentPage: 1,
        dataLength: this.props.data?.length ?? 0,
        pageCount: Math.ceil((this.props.data?.length ?? 0) / 10),
        filter: '',
        itemsPerPageOpen: false,
        filteredData: this.props.data?.map((item, index) => ({_id: index,  ...item})) ?? []
    }

    constructor(props: any) {
        super(props);
    }

    componentDidUpdate(prevProps: Readonly<CrudDisplayProps>, prevState: Readonly<CrudDisplayState>, snapshot?: any) {
        if (this.props.data?.length !== prevProps.data?.length) {
            this.filter(this.state.filter);
        }
    }


    toggleItemsPerPage = () => {
        this.setState((previousState) => {
            return {
                itemsPerPageOpen: !previousState.itemsPerPageOpen
            }
        });
    }

    setItemsPerPage = (items: number) => {
        this.setState((previousState, currentState) => {
            return {
                itemsPerPage: items,
                currentPage: 1,
                pageCount: Math.ceil(previousState.dataLength / items)
            }
        });
    }

    movePage = (by: number) => {
        let newPage: number = this.state.currentPage + by;
        if (newPage > 0 && newPage <= this.state.pageCount) {
            this.setState((previousState, currentState) => {
                return {
                    currentPage: previousState.currentPage + by
                }
            });
        }
    }

    setPage = (page: number) => {
        this.movePage(page - this.state.currentPage);
    }


    filter = (filter: string) => {

        let searchFilter = (item: any) => {
            let expression = new RegExp(filter.toLowerCase())
            for (let val of Object.values(item)) {
                let stringVal = String(val).toLowerCase();
                if (expression.test(stringVal)) {
                    return true;
                }
            }
            return false;
        };

        let data = this.props.data?.map((item, index) => ({_id: index,  ...item})) ?? [];
        let filteredData = data.filter(searchFilter);

        this.setState((previousState, currentState) => {
            return {
                filteredData: filteredData ?? [],
                dataLength: filteredData?.length ?? 0,
                currentPage: 1,
                filter: filter
            }
        });
    }

    keyFor(identifier: string, ...items: any[]): string {
        return identifier + JSON.stringify(items);
    }

    range(size: number, startAt: number = 0, limit: number = 0): ReadonlyArray<number> {
        return [...Array.from(Array((limit < size && limit != 0) ? limit : size).keys())].map(i => i + startAt);
    }

    buildRows = () => {
        let rows: JSX.Element[] = [];
        let startElement = (this.state.currentPage - 1) * this.state.itemsPerPage;
        let endElement = this.state.currentPage * this.state.itemsPerPage
        this.state.filteredData.slice(startElement, endElement)
            .map((item, index) => rows.push(
                <tr key={this.keyFor('row', item)}>
                    {this.buildRow(item, item._id)}
                </tr>));

        if (rows.length === 0) {
            rows.push(<tr key={this.keyFor('row', 'NO_DATA')}>
                <td
                    colSpan={(this.props.columns?.length ?? 0) + 2}
                    className={'text-center bg-light text-muted fst-italic'}>
                    No data!
                </td>
            </tr>)
        }

        return rows;
    }

    buildRow = (item: any, index: number): JSX.Element[] => {
        const {_id: _, ...pureItem} = item;
        const vals: string[] = Object.values(pureItem);

        let result = [
            <td key={this.keyFor('col', index)}>{index}</td>
        ];

        vals.map((value, index) => result.push(<td  key={this.keyFor(`col${index}`, index, value)}>{value}</td>));

        result.push(
            <td key={this.keyFor('col', index, item)}>
                <div className="btn-group btn-group-sm">
                    {this.props.actions?.actions.map((item) => (
                        <button key={this.keyFor('btn', index, item)} className={'btn ' + 'btn-' + item.color} onClick={() => {
                            item.action(index, () => this.filter(this.state.filter))
                        }}>
                            {item.name}
                        </button>
                    ))}
                </div>
        </td>
        );
        return result;
    }

    public render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <Row>
                            <Col xs={8}>
                                <div className={'d-flex'}>
                                    <h3 className={'me-4'}>{this.props.name}</h3>
                                    <Button
                                        color={'primary'}
                                        onClick={() => {
                                            this.props.create?.action(-1, () => this.filter(this.state.filter))
                                        }}>
                                        <i className="fas fa-plus me-2"></i>
                                        Create
                                    </Button>
                                </div>
                            </Col>
                            <Col>
                                <SearchBar filter={this.filter}/>
                            </Col>
                        </Row>

                    </CardHeader>
                    <CardBody>
                        <Table bordered>
                            <thead>
                            <tr>
                                <th>#</th>
                                {this.props.columns?.map((item) => (
                                    <th key={item}>{item}</th>
                                ))}
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.buildRows()}
                            </tbody>
                        </Table>
                    </CardBody>
                    <CardFooter>
                        <Row className="text-muted align-items-center px-3">
                            <Col className="text-start">
                                {(this.state.dataLength == 0) ? 0 : (this.state.currentPage - 1) * this.state.itemsPerPage + 1}
                                -
                                {(this.state.itemsPerPage * this.state.currentPage > this.state.dataLength) ?
                                    this.state.dataLength : this.state.currentPage * this.state.itemsPerPage}
                                &nbsp;of&nbsp;
                                {this.state.dataLength}
                                &nbsp;items
                            </Col>
                            <Col className="text-center">
                                <Row>
                                    <Dropdown size="sm" isOpen={this.state.itemsPerPageOpen} toggle={this.toggleItemsPerPage} direction="down">
                                        Show
                                        <DropdownToggle caret className="mx-2">{this.state.itemsPerPage}</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={() => this.setItemsPerPage(5)}>5</DropdownItem>
                                            <DropdownItem onClick={() => this.setItemsPerPage(10)}>10</DropdownItem>
                                            <DropdownItem onClick={() => this.setItemsPerPage(20)}>20</DropdownItem>
                                            <DropdownItem onClick={() => this.setItemsPerPage(50)}>50</DropdownItem>
                                        </DropdownMenu>
                                        Items
                                    </Dropdown>
                                </Row>
                            </Col>
                            <Col className="text-end">
                                <ButtonGroup size="sm">
                                    <Button outline onClick={() => this.movePage(-1)}>« </Button>
                                    {this.range(this.state.pageCount, Math.max(1, this.state.currentPage - Math.min(2, this.state.currentPage)), 3).map(item => (
                                        <Button onClick={() => this.setPage(item)} className={(item === this.state.currentPage) ? 'btn-primary' : ''}>{item}</Button>
                                    ))}
                                    <Button outline onClick={() => this.movePage(1)}> »</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>

                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default CrudDisplay;
