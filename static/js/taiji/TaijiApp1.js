import React from 'react';
import ReactDOM from 'react-dom';

import ListView from "../list/ListView.js"
import SearchView from "./SearchView.js"
import CompanyInfo from "./company/CompanyInfo.js"
import UIStack from "../nav/UIStack.js"
export default class TaijiApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lastPage: "SearchView"}
        this.uiStack = new UIStack()
        this.onItemClick = this.onItemClick.bind(this)
    }

    onItemClick(event){
        console.log(this);
        this.setState({lastPage: "companyInfo"});
    }

    render() {
        if (this.state.lastPage == "SearchView") {
            return (<SearchView itemClick={this.onItemClick} nav={this}/>)
        }else{
            return (<CompanyInfo/>)
        }
    }
}
