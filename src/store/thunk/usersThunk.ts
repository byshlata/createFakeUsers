import { createAsyncThunk } from '@reduxjs/toolkit';

import { API } from 'api';
import { AppRootStore } from 'store/store';
import { UserSendType } from 'types';
import { UserType } from 'types/UserType';
import { setErrorResponse } from 'utils';

export const getUsers = createAsyncThunk(
  'usersSlice/getUsers',
  async (
    payload: UserSendType,
    { rejectWithValue, getState },
  ): Promise<UserType[] | Function> => {
    try {
      const state = getState() as AppRootStore;
      return await API.users({
        page: state.app.page,
        seed: state.app.seed,
        language: state.app.language,
        ...payload,
      });
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const getUsersSeed = createAsyncThunk(
  'usersSlice/getUsersSeed',
  async (_, { rejectWithValue, getState }): Promise<UserType[] | Function> => {
    try {
      const state = getState() as AppRootStore;
      return await API.seed({
        page: state.app.page,
        seed: state.app.seed,
        language: state.app.language,
      });
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);
