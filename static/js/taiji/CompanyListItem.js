import React from 'react';
import ReactDOM from 'react-dom';

export default class CompanyListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this)
    }

    onItemClick(event){
        this.props.itemClick(event);
    }

    render() {
        return (<div onClick={this.onItemClick} className="cell">
                    <div>小米科技有限责任公司</div>
                    <div className="cell-sublabel">成立于 2013年4月21日</div>
                </div>);
    }
}