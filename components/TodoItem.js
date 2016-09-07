import React, { Component, PropTypes } from 'react'

export default class TodoItem extends Component {
    render(){
        return (
            <li className="completed">
                <div className="view" >
                    <input className="toggle" type="checkbox" />
                    <label>{this.props.children}</label>
                    <button className="destroy" ></button>
                </div>
                <input className="edit" value="{this.props.children}" />
            </li>
        )
    }
}