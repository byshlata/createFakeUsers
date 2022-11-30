export type { AppDispatchType, AppRootStore } from './store';

export { store } from './store';

export {
  selectorIsProgress,
  selectorUsers,
  selectorPage,
  selectorSeed,
  selectorAmountMistake,
} from './selector';

export { setSeed, setMistake, setLanguage, resetUser, setPage, resetPage } from './slice';

export { getUsers } from './thunk';
