import { useEffect, useState } from 'react'
import { getStorage, setStorage } from '../utils/storage'

export default function useTodos() {
    const [todos, setTodos] = useState(getStorage)
    const [input, setInput] = useState('')

    useEffect(() => {
        setStorage(todos)
    }, [todos])

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault()

        if (!input.trim()) return

        const newTodo = {
            id: Date.now().toString(),
            value: input,
            completed: false,
        }

        setTodos((prev) => [newTodo, ...prev])
        setInput('')
    }

    const toggleTodo = (id) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    return {
        todos,
        input,
        changeInput,
        addTodo,
        toggleTodo,
        deleteTodo,
    }
}
