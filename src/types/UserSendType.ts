import { LanguageType } from 'types/LanguageType';

export type UserSendType = {
  page?: number;
  amount?: number;
  language?: LanguageType;
  seed?: number;
};
