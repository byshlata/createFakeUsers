import { createSlice } from '@reduxjs/toolkit';

import { UserResponseType, UserType } from '../../types';
import { getUsersSeed, getUsers } from '../thunk';

const USER_TO_TWO_FIRST_PAGE = 20;

type InitialStateType = {
  users: UserType[];
};

export const initialState: InitialStateType = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUser: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      if (state.users.length) {
        state.users = [...state.users, ...payload.users];
      } else {
        state.users = [...payload.users];
      }
    });
    builder.addCase(getUsersSeed.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      const startUser = state.users.slice(0, state.users.length - USER_TO_TWO_FIRST_PAGE);
      state.users = [...startUser, ...payload.users];
    });
  },
});

export const { resetUser } = usersSlice.actions;
