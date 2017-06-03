import React from 'react';
import ReactDOM from 'react-dom';

import View from '../pandora/container/view.js'
import RowView from '../pandora/container/RowView.js'
import Menu from "../nav/menu.js"
import TabBar from "../nav/main_view_tabs.js"
import AppContainer from "../pandora/container/container.js"

export default class TaijiApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container-fluid">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="searchText" placeholder="公司名称"/>
                        </div>
                    </form>
                </div>)
    }
}
