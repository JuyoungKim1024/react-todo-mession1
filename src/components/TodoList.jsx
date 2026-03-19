export default function TodoList({ todos, deleteTodo, editTodo, toggleTodo }) {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo, index) => (
                <li
                    key={todo.id}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    className={todo.completed ? 'completed' : ''}
                >
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                    {index + 1}. {todo.text}/{todo.completed ? '완료' : '미완료'}
                    <div className="btn-group">
                        <button className="edit-btn" onClick={() => editTodo(todo)}>
                            수정
                        </button>
                        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                            삭제
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
