
const { createSlice, configureStore, } = require("@reduxjs/toolkit");



const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        items: [],
        modalVisible: false
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
        },
        setModalVisible: (state, action) => {
            state.modalVisible = action.payload.visible
        }
    },

})






export const { addItem, clearList, removeItem, setModalVisible } = todolistSlice.actions

const store = configureStore({
    reducer: {
        todolist: todolistSlice.reducer,
    }
})


export default store;

