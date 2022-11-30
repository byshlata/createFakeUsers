import { API_CONFIG } from 'api/index';
import { PathAPI } from 'enums';
import { UserSendType, UserType } from 'types';

export const API = {
  users: async (payload: UserSendType) => {
    const res = await API_CONFIG.post<UserType[]>(`${PathAPI.Users}`, { ...payload });
    return res.data;
  },

  seed: async (payload: UserSendType) => {
    const res = await API_CONFIG.post<UserType[]>(`${PathAPI.Seed}`, { ...payload });
    return res.data;
  },
};
