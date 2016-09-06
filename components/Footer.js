import React,{ Component,PropTypes } from 'react'

export default class Header extends Component {
    render() {
        return ( 
            <footer className="footer">
                <span className="todo-count">
                    <strong>8</strong>
                    <span> items</span>
                    <span> left</span>
                </span>
                <ul className="filters" >
                    <li><a href="#/" className="selected">All</a></li>
                    <li><a href="#/active" className="">Active</a></li>
                    <li><a href="#/completed" className="">Completed</a></li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}