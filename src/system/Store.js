import { configureStore } from "@reduxjs/toolkit";
import { products } from "./ProdutsSlice";
import { product } from "./ProductDetailsSlice";
import { categroy } from "./CategorySlice";
import { categoryDetails } from "./CategoryDetailsSlice";
import { searchResult } from "./SearchSlice";
export const store = configureStore({
  reducer: {
    products,
    product,
    categroy,
    categoryDetails,
    searchResult,
  },
});
