import React,{ Component,PropTypes } from 'react'

export default class Header extends Component {
    render() {
        return ( 
            <section className="main">
               <input className="toggle-all" type="checkbox" />
                <ul className="todo-list">
                    <li className="">
                        <div className="view" >
                            <input className="toggle" type="checkbox" />
                            <label>asdf</label>
                            <button className="destroy" ></button>
                        </div>
                        <input className="edit" value="asdf" />
                    </li>
                    <li className="completed">
                        <div className="view" >
                            <input className="toggle" type="checkbox" />
                            <label >d</label>
                            <button className="destroy" ></button>
                        </div>
                        <input className="edit" value="d" />
                    </li>
                    <li className="" >
                        <div className="view" >
                            <input className="toggle" type="checkbox" />
                            <label >fgh</label>
                            <button className="destroy" ></button>
                        </div>
                        <input className="edit" value="fgh"/>
                    </li>
                </ul>
            </section>
        )
    }
}