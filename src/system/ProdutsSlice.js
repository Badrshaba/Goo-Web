import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    product: [],
    cart: [],
    loading: false,
  },
  reducers:{
    pluse:(state,action)=>{
let productCart = state.cart.find((e)=>e.id==action.payload.id)
       if (productCart) {
        productCart.count+=1
       } else {
         state.cart=([action.payload, ...state.cart]);
       }
    },
    incermant:(state,action)=>{
      let productCart = state.cart.find((e)=>e.id==action.payload.id)
      if (productCart) {
       productCart.count+=1
      }
    },
     decermant:(state,action)=>{
      let productCart = state.cart.find((e)=>e.id==action.payload.id)
      if (productCart) {
       productCart.count-=1
      }
     },
    deleteItem:(state,action)=>{
       let delet=state.cart.filter((e)=>e.id!=action.payload.id)
       state.cart=delet
    },
    deleteAll:(state)=>{
      state.cart=[]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      
      state.product =  action.payload.products.map((e)=>{
e.count=1
return e
      })
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const products = productsSlice.reducer;
export const {incermant,decermant,deleteItem,deleteAll,pluse} = productsSlice.actions;
