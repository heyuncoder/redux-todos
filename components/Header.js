import React,{ Component,PropTypes } from 'react'

export default class Header extends Component {
    render() {
        return ( 
            <header className="header"> 
                <h1>todos</h1>
                <input className="new-todo" placeholder="想要做点什么?" value="" />
            </header>
        )
    }
}