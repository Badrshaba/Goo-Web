import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const getCategoryDetails = createAsyncThunk('getCategoryDetails',async(id,thunkAPI)=>{
    const {rejectWithValue }=thunkAPI
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})








const categorySlice = createSlice({
    name:"categorySlice",
    initialState:{categoryDetails:[],loading:false },
extraReducers:(builder)=>{
    builder.addCase(getCategoryDetails.pending,(state)=>{
state.loading=true
    })
    builder.addCase(getCategoryDetails.fulfilled,(state,action)=>{
        state.loading=false
         state.categoryDetails=action.payload
     
    } )
    builder.addCase(getCategoryDetails.rejected,(state,action)=>{
        state.categoryDetails=action.payload
    })

}
})

export const categoryDetails = categorySlice.reducer