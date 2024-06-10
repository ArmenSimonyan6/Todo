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

            if(state.text == "") return

            state.todos.push({
                id: new Date().getTime(),
                text: state.text,
                isDone: false
            })

            state.text = ""
        },

        deleteTodo(state, { payload }){
            state.todos = state.todos.filter((todo) => todo.id !== payload )
        },

        checkedTodo(state, { payload }){
            let idx = state.todos.findIndex(el => el.id === payload)
            state.todos[idx].isDone = !state.todos[idx].isDone
        }
    }
})


export const { changeText, addTodo, deleteTodo, checkedTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer

export const selectTodo = (state) => state.todo