import { useTodoContext } from '../context/TodoContext'

export default function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo } = useTodoContext()

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />

            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
            >
                {todo.value}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </li>
    )
}
