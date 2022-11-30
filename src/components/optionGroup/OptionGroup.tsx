import React, { ReactElement, useEffect, useState } from 'react';

import style from './OptionGroup.module.sass';

import { InputSEED } from 'components/inputInputSEED/InputSEED';
import { InputMistake } from 'components/inputMistake/InputMistake';
import { RadioGroupLang } from 'components/radioGroupLang/RadioGroupLang';
import { SliderMistake } from 'components/sliderMistake/SliderMistake';
import { AmountUser, Language, OptionSlider } from 'enums';
import { useAppDispatch } from 'hooks';
import { useDebounce } from 'hooks/useDebounce';
import { getUsers, resetPage, resetUser, setLanguage, setMistake, setSeed } from 'store';
import { getUsersSeed } from 'store/thunk/usersThunk';
import { LanguageType } from 'types';

const LANGUAGE = [Language.US, Language.RU, Language.UK];

export const OptionGroup = (): ReactElement => {
  const dispatch = useAppDispatch();

  const [languageLocal, setLanguageLocal] = useState<string>('');
  const [mistake, setMistakeLocal] = useState<number>(0);

  const sliderMistakeDebounce = useDebounce(mistake);

  const onChangeSlider = (value: number): void => {
    setMistakeLocal(value);
  };

  const onSeed = (value: number): void => {
    dispatch(setSeed(value));
    dispatch(getUsersSeed());
  };

  useEffect(() => {
    dispatch(setMistake(sliderMistakeDebounce));
  }, [sliderMistakeDebounce]);

  useEffect(() => {
    const lang = languageLocal as LanguageType;
    if (languageLocal) {
      dispatch(resetUser());
      dispatch(setLanguage(lang));
      dispatch(resetPage());
      dispatch(getUsers({ amount: AmountUser.Start, language: lang }));
    }
  }, [languageLocal]);

  useEffect(() => {
    dispatch(setMistake(sliderMistakeDebounce));
  }, [sliderMistakeDebounce]);

  return (
    <div className={style.optionWrapper}>
      <div className={style.optionItem}>
        <RadioGroupLang onChange={setLanguageLocal} values={LANGUAGE} />
      </div>
      <div className={style.optionItem}>
        <SliderMistake
          value={mistake}
          onChange={onChangeSlider}
          step={OptionSlider.Step}
          max={OptionSlider.Max}
          min={OptionSlider.Min}
        />
      </div>
      <div className={style.optionItem}>
        <InputMistake
          value={sliderMistakeDebounce}
          onChange={onChangeSlider}
          min={OptionSlider.Min}
          max={OptionSlider.MaxMistakes}
        />
      </div>
      <div className={style.optionItem}>
        <InputSEED changeValue={onSeed} />
      </div>
    </div>
  );
};
