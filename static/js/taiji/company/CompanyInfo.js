import React from 'react';
import ReactDOM from 'react-dom';

export default class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="infoPanel">
                    <div className="content container-fluid">
                        <div className="row">
                            <div className="col-xs-12 infoPanel-item">小米科技有限责任公司</div>
                            <div className="col-xs-12 infoPanel-item">手机技术开发；手机生产、手机服务；（限海淀区永捷北路2号二层经营）从事互联网文化活动；技术开发；货物进出口、技术进出口、代理进出口；销售通讯设备；维修仪器仪表；维修办公设备；承办展览展示活动；会议服务；筹备、策划、组织大型庆典；设计、制作、代理、发布广告。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准...</div>
                        </div>
                        <div className="row infoPanel-field">
                            <div className="col-xs-4">电话：</div>
                            <div className="col-xs-8">13849578736</div>
                        </div>
                        <div className="row infoPanel-field">
                            <div className="col-xs-4">电话：</div>
                            <div className="col-xs-8">13849578736</div>
                        </div>
                    </div>
                    <div className="tabbar container-fluid">
                        <div className="row">
                            <div className="col-xs-4 tabbar-favorite">收藏</div>
                            <div className="col-xs-4"></div>
                            <div className="col-xs-4">关闭</div>
                        </div>
                    </div>
                </div>);
    }
}