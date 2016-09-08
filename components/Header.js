import React,{ Component,PropTypes } from 'react'

export default class Header extends Component {
    handleKeyup(e){
        console.log('handleKeyup');
    }
    render() {
        return ( 
            <header className="header"> 
                <h1>Todos</h1>
                <input className="new-todo" placeholder="想要做点什么?" onKeyup={this.handleKeyup}/>
            </header>
        )
    }
}