export default function TodoWriteForm({ input, changeInput, addTodo, editId }) {
    return (
        <form onSubmit={addTodo}>
            <input value={input} onChange={changeInput} placeholder="할 일을 입력하세요" />

            <button type="submit">{editId ? '수정' : '추가'}</button>
        </form>
    )
}
