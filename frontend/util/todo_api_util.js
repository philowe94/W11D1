//Your API utilities are what actually make the $.ajax requests that will hit your backend and fetch your data.

export const fetchTodos = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/todos'
    });
}

export const createTodo = (todo) => {
    return $.ajax({
        method: 'POST',
        url: '/api/todos',
        data: { todo }
    })
};