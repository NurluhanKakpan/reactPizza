import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId : 0,
    sort :{name:'популярности',sortType:'rating'}
}


const filterSlice = createSlice({

    name:'filter',
    initialState:initialState,
    reducers:{
        setCategoryId(state,action){
            state.categoryId = action.payload

        },
        setSortItem(state,action){
            state.sort = action.payload

        }
    }

})

export const {setCategoryId,setSortItem} = filterSlice.actions

export default filterSlice.reducer