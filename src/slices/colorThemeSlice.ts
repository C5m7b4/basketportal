import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/store';
import { ColorThemeName } from '@/styles/themes';
import { defaultColorThemeName } from '@/styles/themes';

type ColorThemeState = {
  theme: ColorThemeName;
};

const initialState: ColorThemeState = {
  theme: defaultColorThemeName,
};

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    updateColorTheme: (state, action: PayloadAction<ColorThemeName>) => {
      state.theme = action.payload;
    },
  },
});

export const selectColorTheme = (state: RootState) => state.colorTheme.theme;
export default colorThemeSlice.reducer;

// actions
export const { updateColorTheme } = colorThemeSlice.actions;
