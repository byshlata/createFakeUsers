import _ from 'lodash';

import { languageObj } from './data/generatorMistakes';

import { LanguageType } from 'types';

const deleteCharByIndex = (str: string): string => {
  const randomIndex = _.random(0, str.length - 1);

  return str.slice(0, randomIndex) + str.slice(randomIndex + 1);
};

const swapTwoElement = (str: string): string => {
  const START_POSITION = 2;
  const TWO_CHAR = -2;
  const randomIndex = _.random(0, str.length - 1);
  const start =
    randomIndex < str.length - 1
      ? str.slice(0, randomIndex)
      : str.slice(0, randomIndex - 1);
  const reverse = str
    .slice(0, randomIndex + START_POSITION)
    .slice(TWO_CHAR)
    .split('')
    .reverse()
    .join('');
  return start + reverse + str.slice(randomIndex + START_POSITION);
};

const addCharByIndex = (str: string, language: LanguageType): string => {
  const randomIndex = _.random(0, str.length - 1);
  const randomIndexChar = _.random(0, languageObj[language].length - 1);

  return (
    str.slice(0, randomIndex) +
    languageObj[language][randomIndexChar] +
    str.slice(randomIndex)
  );
};

const countMistake = (num: number): number => {
  const virginNumber = Math.trunc(num);
  const mistake = _.random(1, Math.round(1 / (num - virginNumber))) === 1 ? 1 : 0;
  return mistake + virginNumber;
};

const mistakeFunk = [deleteCharByIndex, swapTwoElement, addCharByIndex];

export const generatorMistakes = (
  str: string,
  amountMistake: number,
  language: LanguageType,
): string => {
  const virginAmountMistake = countMistake(amountMistake);
  const AMOUNT_MISTAKE_FUNC = 2;
  let newStr = str;
  const lengthStr = str.length;
  for (let i = 0; i < virginAmountMistake; i += 1) {
    let randomFunc;
    if (newStr.length >= lengthStr * AMOUNT_MISTAKE_FUNC) {
      randomFunc = _.random(0, 1);
    } else if (newStr.length <= lengthStr / AMOUNT_MISTAKE_FUNC) {
      randomFunc = _.random(1, AMOUNT_MISTAKE_FUNC);
    } else {
      randomFunc = _.random(0, AMOUNT_MISTAKE_FUNC);
    }

    newStr = mistakeFunk[randomFunc](newStr, language);
  }

  return newStr;
};
