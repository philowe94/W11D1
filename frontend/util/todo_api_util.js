//Your API utilities are what actually make the $.ajax requests that will hit your backend and fetch your data.

export const fetchTodos = () => {
    return $.ajax({
        method: "GET",
        url: "api/todos"
    }).then((todos) => {
        return todos;
    })
}