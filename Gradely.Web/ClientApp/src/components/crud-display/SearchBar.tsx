import React, {Component} from 'react';
import {Button, InputGroup, InputGroupText} from "reactstrap";

type SearchBarProps = {
    filter: (filter: string) => void;
}

type SearchBarState = {
    filter: string;
    priorFilter: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

    constructor(props: any) {
        super(props);
        this.state = {
            filter: '',
            priorFilter: ''
        }
    }

     setFilter = (event: any) => {
        this.setState({
            filter: event.target.value
        });
    }

    filter = () => {
        this.setState((previousState) => {
            return {
                priorFilter: previousState.filter
            }
        });
        this.props.filter(this.state.filter);
    }

    public render() {
        return (
            <div>
                <InputGroup>
                    <input type="search" value={this.state.filter} onChange={this.setFilter} autoComplete="off" className="form-control"/>
                    <Button color="primary" className="rounded-end" onClick={this.filter}>
                        <i className="fas fa-search"></i>
                    </Button>
                </InputGroup>
            </div>
        );
    }
}

export default SearchBar;
