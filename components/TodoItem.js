import React, { Component, PropTypes } from 'react'

class TodoItem extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            completed: false
        }
    }
    handleClick(){
        console.log('test:handleClick');
        this.setState({
            completed:!this.state.completed
        });
    }
    render(){
        return (
            <li className={this.state.completed?'completed':''}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.handleClick.bind(this)} />
                    <label>{this.props.children}</label>
                    <button className="destroy" >&nbsp;</button>
                </div>
                <input className="edit" value="{this.props.children}" />
            </li>
        )
    }
}

export default TodoItem;