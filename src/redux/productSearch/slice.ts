import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
};
export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  async (paramaters: {
    keywords: string;
    nextPage: number | string;
    pageSize: number | string;
  }) => {
    let url = `http://82.157.43.:8080/api/touristRoutes?pagenumber=${paramaters.nextPage}&pagesize=${paramaters.pageSize}`;
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`;
    }
    const response = await axios.get(url);
    return {
      data: response.data,
      pagination: JSON.parse(response.headers["x-pagination"]),
    };
  }
);

// @ts-ignore
export const productSearchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
    }),
      builder.addCase(searchProduct.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(searchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
  },
});
