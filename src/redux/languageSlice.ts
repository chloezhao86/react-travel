import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "chinese", code: "zh" },
    {
      name: "english",
      code: "en",
    },
    {
      name: "new",
      code: "new",
    },
  ],
};

export const languageSlice = createSlice({
  name: "abc",
  initialState: defaultState,
  reducers: {
    CHANGE_LANGUAGE: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { CHANGE_LANGUAGE } = languageSlice.actions;
