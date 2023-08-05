import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const getCategroy = createAsyncThunk('getCategroy',async(id,thunkAPI)=>{
    const {rejectWithValue }=thunkAPI
    try {
        const response = await fetch(`https://dummyjson.com/products/categories`)
        const data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})








const CategroySlice = createSlice({
    name:"CategroySlice",
    initialState:{categroy:[],loading:false },
extraReducers:(builder)=>{
    builder.addCase(getCategroy.pending,(state)=>{
state.loading=true
    })
    builder.addCase(getCategroy.fulfilled,(state,action)=>{
        state.loading=false
         state.categroy=action.payload
     
    } )
    builder.addCase(getCategroy.rejected,(state,action)=>{
        state.categroy=action.payload
    })

}
})

export const categroy = CategroySlice.reducer