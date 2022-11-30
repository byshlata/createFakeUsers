import { ReactElement } from 'react';

import { Radio, RadioChangeEvent } from 'antd';

const INDEX = 2;
type RadioGroupLanguageType = {
  onChange: (value: string) => void;
  values: string[];
};

export const RadioGroupLang = ({
  onChange,
  values,
}: RadioGroupLanguageType): ReactElement => {
  const onChangeRadio = (e: RadioChangeEvent): void => {
    onChange(e.target.value);
  };

  return (
    <Radio.Group name="radioGroup" defaultValue={values[0]} onChange={onChangeRadio}>
      {values.map(value => (
        <Radio key={value} value={value}>
          {value.toUpperCase().slice(0, INDEX)}
        </Radio>
      ))}
    </Radio.Group>
  );
};
