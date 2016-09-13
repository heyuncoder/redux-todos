import React,{ Component,PropTypes } from 'react'

export default class Header extends Component {
    handleKeyup(e){
        if(e.keyCode===13){
            console.log('handleKeyup:',e.target.value);
            this.props.tasks.push({
                task:e.target.value,
                completed:false
            })
            console.log(this.props.tasks);
        }
    }
    render() {
        return ( 
            <header className="header"> 
                <h1>Todos</h1>
                <input className="new-todo" placeholder="想要做点什么?" onKeyUp={this.handleKeyup.bind(this)}/>
            </header>
        )
    }
}