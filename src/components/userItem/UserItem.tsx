import React, { ReactElement } from 'react';

import style from './UserItem.module.sass';

import { UserType } from 'types';

type UserItemType = UserType & {
  index: number;
};

export const UserItem = ({
  index,
  id,
  name,
  address,
  phoneNumber,
}: UserItemType): ReactElement => (
  <div className={style.userWrapper}>
    <div className={style.indexItem}>{index} </div>
    <div className={style.lineItem} />
    <div className={style.idItem}>{id} </div>
    <div className={style.lineItem} />
    <div className={style.nameItem}>{name} </div>
    <div className={style.lineItem} />
    <div className={style.addressItem}>{address} </div>
    <div className={style.lineItem} />
    <div className={style.phoneNumberItem}>{phoneNumber} </div>
  </div>
);
