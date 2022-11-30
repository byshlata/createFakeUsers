import React, { ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';

import mainStyle from '../styles/container.module.sass';

import style from './App.module.sass';

import { Footer, Header, OptionGroup, TableUsers } from 'components';
import { AmountUser } from 'enums';
import { useAppDispatch } from 'hooks';
import { getUsers } from 'store';
import { selectorAmountMistake } from 'store/selector';
import { selectorLanguage } from 'store/selector/selectorApp';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  const seed = useSelector(selectorAmountMistake);
  const language = useSelector(selectorLanguage);

  useEffect(() => {
    dispatch(getUsers({ language, seed, amount: AmountUser.Start }));
  }, []);

  return (
    <div className={style.appWrapper}>
      <Header />
      <div className={mainStyle.mainContainer}>
        <div className={mainStyle.container}>
          <TableUsers />
          <OptionGroup />
        </div>
      </div>
      <Footer />
    </div>
  );
};
