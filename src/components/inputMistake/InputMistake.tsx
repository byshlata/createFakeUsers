import React, { ReactElement } from 'react';

import { Col, InputNumber } from 'antd';

import { Nullable, UndefinedType } from 'types';

type InputMistakeType = {
  value: UndefinedType<Nullable<number>>;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

export const InputMistake = ({
  value,
  min,
  max,
  onChange,
}: InputMistakeType): ReactElement => {
  const onChangeValue = (valueInput: Nullable<number>): void => {
    if (valueInput) {
      onChange(valueInput);
    }
  };

  return (
    <Col span={4}>
      <InputNumber
        min={min}
        max={max}
        style={{ margin: '0 16px' }}
        value={value}
        onChange={onChangeValue}
      />
    </Col>
  );
};
