import { configureStore } from '@reduxjs/toolkit';

import { appSlice, usersSlice } from './slice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
