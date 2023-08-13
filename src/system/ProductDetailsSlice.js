import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductDetails = createAsyncThunk(
  "getProductDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: { product: [], loading: false },
  reducers:{
    inceramentCount: (state) => {    
      let productCart = state.product
      if (productCart) {
       productCart.count+=1
      }
    },
    deceramentCount: (state) => {
      let productCart = state.product
      if (productCart) {
       productCart.count-=1
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      action.payload["count"] = 1;
      state.product = action.payload;
      console.log(state.product);
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const product = productSlice.reducer;
export const { inceramentCount, deceramentCount } = productSlice.actions;
