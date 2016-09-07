import React,{ Component,PropTypes } from 'react'

export default class Header extends Component {
    render() {
        return ( 
            <footer className="footer">
                <span className="todo-count">
                    <strong>8</strong>
                    <span> 项</span>
                </span>
                <ul className="filters" >
                    <li><a href="#/" className="selected">所有</a></li>
                    <li><a href="#/active" className="">进行中</a></li>
                    <li><a href="#/completed" className="">已完成</a></li>
                </ul>
                <button className="clear-completed">清除已完成</button>
            </footer>
        )
    }
}