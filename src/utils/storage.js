const KEY = 'todos'

export const getStorage = () => {
    const data = localStorage.getItem(KEY)
    return data ? JSON.parse(data) : []
}

export const setStorage = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos))
}
