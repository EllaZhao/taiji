import React from 'react';
import ReactDOM from 'react-dom';

export default class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="infoPanel">
                    <div className="content">content</div>
                    <div className="tabbar container-fluid">
                        <div className="row">
                            <div className="col-xs-4">收藏</div>
                            <div className="col-xs-6">关闭</div>
                        </div>
                    </div>
                </div>);
    }
}