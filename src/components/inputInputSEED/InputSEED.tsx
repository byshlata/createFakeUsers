import React, { ReactElement, useState } from 'react';

import { Button, InputNumber } from 'antd';

import style from './InputSEED.module.sass';

import { Nullable } from 'types';

type InputSeedType = {
  changeValue: (value: number) => void;
};

export const InputSEED = ({ changeValue }: InputSeedType): ReactElement => {
  const [value, setValue] = useState<number>(0);

  const onChange = (valueEvent: Nullable<number>): void => {
    if (valueEvent) {
      setValue(valueEvent);
    }
  };

  const onClick = (): void => {
    if (value) {
      changeValue(value);
    }
  };

  return (
    <div className={style.seedWrapper}>
      <InputNumber style={{ margin: '0 16px' }} value={value} onChange={onChange} />
      <Button type="primary" onClick={onClick}>
        Set seed
      </Button>
    </div>
  );
};
