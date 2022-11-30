import { AppRootStore } from '../store';

import { LanguageType } from 'types';

export const selectorIsProgress = (state: AppRootStore): boolean => state.app.isProgress;

export const selectorSeed = (state: AppRootStore): number => state.app.seed;

export const selectorAmountMistake = (state: AppRootStore): number =>
  state.app.amountMistake;

export const selectorLanguage = (state: AppRootStore): LanguageType => state.app.language;

export const selectorPage = (state: AppRootStore): number => state.app.page;
