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
    inceramentCount: (state, action) => {
      
      //  const findProduct =  state.product.find((e)=>e.id===action.payload.id)
      //  console.log(findProduct);
// state.product=state.product.map((e)=>{e.count++ 
//   return e})
     
    //  console.log(state.product);

    // let clone = [...action.payload,action.payload.count+=1]
    // state.product.push(clone)
    //   let x = action.payload.count
    //   x+=1
    //   x+=1
    //  console.log(action.payload["count"]=x);
     
    
      
    },
    deceramentCount: () => {
      console.log("ok");
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
