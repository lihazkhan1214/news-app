import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  current: string;
}

const getInitialLanguage = (): LanguageState => {
  const savedLang = localStorage.getItem("language");
  return {
    current: savedLang || "en",
  };
};

const languageSlice = createSlice({
  name: "language",
  initialState: getInitialLanguage(),
  reducers: {
    setLanguage: (state, action) => {
      state.current = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
