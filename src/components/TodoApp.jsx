import { useState } from 'react'
import TodoList from './TodoList'
import TodoWriteForm from './TodoWriteForm'

export default function TodoApp() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [editId, setEditId] = useState(null)

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault()

        if (!input.trim()) {
            alert('할 일을 입력하세요')
            return
        }
        setTodos([...todos, { id: Date.now(), text: input, completed: false }])

        setInput('')
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = (todo) => {
        setInput(todo.text)
        setEditId(todo.id)
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    }

    return (
        <div className="container">
            <h1>Todo App</h1>

            <TodoWriteForm input={input} changeInput={changeInput} addTodo={addTodo} editId={editId} />

            <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodo={toggleTodo} />
        </div>
    )
}
