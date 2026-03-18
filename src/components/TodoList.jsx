export default function TodoList({ todos, deleteTodo, editTodo }) {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo, index) => (
                <li key={todo.id}>
                    {index + 1}. {todo.text}
                    <button onClick={() => editTodo(todo)}>수정</button>
                    <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                </li>
            ))}
        </ul>
    )
}
