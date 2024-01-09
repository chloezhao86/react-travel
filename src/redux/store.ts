import { configureStore } from "@reduxjs/toolkit";
import { languageSlice } from "./languageSlice";
import { productSearchSlice } from "./productSearch/slice";

export default configureStore({
  reducer: {
    language: languageSlice.reducer,
    productSearch: productSearchSlice.reducer,
  },
});
