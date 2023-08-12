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
    pluse:(state,obj)=>{
      // let check = state.cart.map((e)=>{
      //   if(e.id==obj.payload){
      //     state.cart=([obj.payload, ...state.cart]);
      //   }
      // })
      //  if (!state.cart.includes(obj.payload)) 
      let check = state.cart.some((e)=>e!=obj)
      if(check)
      // state.cart = state.cart.map((e)=>{if(e.id==obj.id){e.count+=1} console.log(e); })
    console.log(state.cart);
      else
         state.cart=([obj.payload, ...state.cart]);
        console.log(state.cart);
      //  } else {
        // console.log("no");
        // state.cart = ([...state.cart]);
        // cartProducats.map((e) => {
        //   if (e.id === obj.payload.id) {
        //     e.count++;
        //   }
        // });
      // }
    },
//     incermant:(state,obj)=>{
//       let incer = state.cart.map((e)=>{if(e.id==obj.id){ e.count++}return e})
//       console.log(incer);
//  state.cart= incer
//     },
//     decermant:()=>{},
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
e["count"]=1
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
