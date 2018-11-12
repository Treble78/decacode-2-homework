import React, { Component } from 'react';


class Tab extends Component{

    constructor(props){
        super(props)
    }

    render() {
        
        return (
            <li className="nav-item">
                <a onClick={this.props.onTabClick} className="nav-link" href="#">{this.props.name}</a>
            </li>
        );
    }
}


export default Tab;


                    
                   