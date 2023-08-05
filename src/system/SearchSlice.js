import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const getSearchResult = createAsyncThunk('getSearchResult',async(id,thunkAPI)=>{
    const {rejectWithValue }=thunkAPI
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})








const SearchSlice = createSlice({
    name:"SearchSlice",
    initialState:{searchResult:[],loading:false },
extraReducers:(builder)=>{
    builder.addCase(getSearchResult.pending,(state)=>{
state.loading=true
    })
    builder.addCase(getSearchResult.fulfilled,(state,action)=>{
        state.loading=false
         state.searchResult=action.payload
     
    } )
    builder.addCase(getSearchResult.rejected,(state,action)=>{
        state.searchResult=action.payload
    })

}
})

export const searchResult = SearchSlice.reducer