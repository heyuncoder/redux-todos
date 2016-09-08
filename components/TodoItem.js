import React, { Component, PropTypes } from 'react'

export default class TodoItem extends Component {

    state = {
        completed: false
    };

    handleClick(){
        console.log('test');
        this.setState({
            completed: !this.state.completed
        });
    }

    render(){
        return (
            <li className="{this.state?'completed':''}">
                <div className="view" >
                    <input className="toggle" type="checkbox" onclick="this.handleClick" />
                    <label>{this.props.children}</label>
                    <button className="destroy" >&nbsp;</button>
                </div>
                <input className="edit" value="{this.props.children}" />
            </li>
        )
    }
}