import { useTodoContext } from '../context/TodoContext'

export default function TodoWriteForm() {
    const { input, changeInput, addTodo } = useTodoContext()

    return (
        <form onSubmit={addTodo}>
            <input value={input} onChange={changeInput} placeholder="할 일을 입력하세요" />

            <button type="submit">추가</button>
        </form>
    )
}
