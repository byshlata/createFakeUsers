import { AppRootStore } from '../store';

import { UserType } from 'types';

export const selectorUsers = (state: AppRootStore): UserType[] => state.users.users;
