import { configureStore } from "@reduxjs/toolkit";
import { languageSlice } from "./languageSlice";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";

export default configureStore({
  reducer: {
    language: languageSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer,
  },
});
