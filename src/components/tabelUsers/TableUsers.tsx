import React, { ReactElement, useRef, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';

import style from './TableUsers.module.sass';

import { PlayStopper, UserItem } from 'components';
import { AmountUser } from 'enums';
import { useAppDispatch } from 'hooks';
import { getUsers, selectorIsProgress, selectorUsers, setPage } from 'store';
import { selectorAmountMistake } from 'store/selector';
import { selectorLanguage } from 'store/selector/selectorApp';
import { generatorMistakes } from 'utils/generatorMistakes/generatorMistakes';

const DELAY = 1000;

export const TableUsers = (): ReactElement => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectorUsers);
  const mistake = useSelector(selectorAmountMistake);
  const language = useSelector(selectorLanguage);
  const isLoading = useSelector(selectorIsProgress);
  const [disabled, setDisabled] = useState<boolean>(false);
  const ref = useRef(null);

  const fetchMoreData = (): void => {
    setDisabled(true);
    dispatch(setPage());
    dispatch(getUsers({ amount: AmountUser.Other }));
    setTimeout(() => {
      setDisabled(false);
    }, DELAY);
  };

  return (
    <div className={style.tableWrapper}>
      <InfiniteScroll
        ref={ref}
        className={style.table}
        dataLength={users.length}
        next={fetchMoreData}
        hasMore
        loader
        scrollThreshold={0.99}
        height={500}
      >
        {users
          .map(({ name, address, phoneNumber, id }) => ({
            name: generatorMistakes(name, mistake, language),
            address: generatorMistakes(address, mistake, language),
            id: generatorMistakes(id, mistake, language),
            phoneNumber: generatorMistakes(phoneNumber, mistake, language),
          }))
          .map(({ id, address, phoneNumber, name }, index) => (
            <UserItem
              id={id}
              name={name}
              index={index + 1}
              address={address}
              phoneNumber={phoneNumber}
              // eslint-disable-next-line react/no-array-index-key
              key={index + id}
            />
          ))}
      </InfiniteScroll>
      {(disabled || isLoading) && <PlayStopper />}
    </div>
  );
};
