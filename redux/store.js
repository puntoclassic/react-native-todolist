
const { createSlice, configureStore, } = require("@reduxjs/toolkit");



const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload.item]
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload.index, 1);
            state.items = [...state.items];
        },
        clearList: (state) => {
            state.items = [];
        }

    },

})






export const { addItem, clearList, removeItem } = todolistSlice.actions

const store = configureStore({
    reducer: {
        todolist: todolistSlice.reducer,
    }
})


export default store;

