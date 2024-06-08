import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    text: "",
    todos: []
}

export const todoSlice = createSlice({
    name: "todo", 
    initialState,
    reducers: {
        changeText(state, { payload }){
            state.text = payload
        },

        addTodo(state){
            state.todos.push({
                id: new Date().getTime(),
                text: state.text
            })

            state.text = ""
        },

        deleteTodo(state, { payload }){
            state.todos = state.todos.filter((todo, key) => todo.id !== payload)
        },
    }
})


export const { changeText, addTodo, deleteTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer

export const selectTodo = (state) => state.todo