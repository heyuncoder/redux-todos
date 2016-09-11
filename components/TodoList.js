import React,{ Component,PropTypes } from 'react'
import TodoItem from './TodoItem'

export default class Header extends Component {
    render() {
        return ( 
            <section className="main">
               <input className="toggle-all" type="checkbox" />
                <ul className="todo-list">
                    <TodoItem>test1</TodoItem>
                    <TodoItem>test2</TodoItem>
                    <TodoItem>test3</TodoItem>
                </ul>
            </section>
        )
    }
}