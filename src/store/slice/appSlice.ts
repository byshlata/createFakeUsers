import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Language } from '../../enums';
import { LanguageType } from '../../types';

type InitialStateType = {
  amountMistake: number;
  page: number;
  seed: number;
  isProgress: boolean;
  language: LanguageType;
};

export const initialState: InitialStateType = {
  amountMistake: 0,
  page: 2,
  seed: 0,
  isProgress: true,
  language: Language.US,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMistake: (state, action: PayloadAction<number>) => {
      state.amountMistake = action.payload;
    },
    setSeed: (state, action: PayloadAction<number>) => {
      state.seed = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.language = action.payload;
    },
    setPage: state => {
      state.page += 1;
    },
    resetPage: state => {
      state.page = initialState.page;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.isProgress = true;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      state => {
        state.isProgress = false;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      state => {
        state.isProgress = false;
      },
    );
  },
});

export const { setSeed, setMistake, setLanguage, setPage, resetPage } = appSlice.actions;
