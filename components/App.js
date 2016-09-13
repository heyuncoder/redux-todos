import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'

let tasks = [{
    task:"test1",
    completed:false
},{
    task:"test2",
    completed:true
},{
    task:"test3",
    completed:false
}]

const App = () => (
    <div className="todoapp">
        <Header tasks={tasks} />
        <TodoList tasks={tasks} />
        <Footer tasks={tasks} />
    </div>
)

export default App