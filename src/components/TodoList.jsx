export default function TodoList({ todos, deleteTodo, editTodo, toggleTodo }) {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo, index) => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                    {index + 1}. {todo.text}/{todo.completed ? '완료' : '미완료'}
                    <button onClick={() => editTodo(todo)}>수정</button>
                    <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                </li>
            ))}
        </ul>
    )
}
