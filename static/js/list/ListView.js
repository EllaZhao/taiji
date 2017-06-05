import React from 'react';
import ReactDOM from 'react-dom';
import CompanyListItem from "../taiji/CompanyListItem.js"

export default class ListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="row">
                    <CompanyListItem itemClick={this.props.itemClick} nav={this.props.nav}/>
                    <CompanyListItem itemClick={this.props.itemClick} nav={this.props.nav}/>
                    <CompanyListItem itemClick={this.props.itemClick} nav={this.props.nav}/>
                </div>);
    }
}