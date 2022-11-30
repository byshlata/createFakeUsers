import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';

import { Spin } from 'antd';

import style from './PlayStopper.module.sass';

export const PlayStopper = (): ReactElement => (
  <div className={style.container}>
    <div className={style.containerSpin}>
      <div className={style.spin}>
        <Spin size="large" tip="Loading..." />
      </div>
    </div>
  </div>
);
