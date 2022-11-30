import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';
import { Slider } from 'antd';

import style from './SliderMistake.module.sass';

type SliderMistakeType = {
  value: number;
  onChange: (value: number) => void;
  step: number;
  max: number;
  min: number;
};

export const SliderMistake = ({
  step,
  value,
  onChange,
  min,
  max,
}: SliderMistakeType): ReactElement => (
  <div className={style.sliderWrapper}>
    <Slider
      className={style.slider}
      defaultValue={max}
      min={min}
      max={max}
      onChange={onChange}
      value={value}
      step={step}
    />
  </div>
);
