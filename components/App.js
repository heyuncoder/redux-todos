import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'

const App = () => (
    <div className="todoapp">
        <Header />
        <TodoList />
        <Footer />
    </div>
)

export default App