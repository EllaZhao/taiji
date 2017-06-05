import React from 'react';
import ReactDOM from 'react-dom';
import ListView from "../list/ListView.js"
export default class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container-fluid">
                    <form className="search">
                        <div className="form-group">
                            <input type="text" className="form-control" id="searchText" placeholder="公司名称"/>
                        </div>
                    </form>
                    <ListView itemClick={this.props.itemClick} nav={this.props.nav}/>
                </div>);
    }
}