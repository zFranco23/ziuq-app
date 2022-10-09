import React, { FC } from 'react'

import style from './Progress.module.scss';

type Props = {
  steps: number,
  currentStep: number,
}

const Progress: FC<Props> = (props) => {
  const { steps, currentStep } = props;
  const progress = (currentStep / steps) * 100;
  return (
    <div className={style.wrapProgress}>
      <div className={style.progressBarContainer}>
        <div className={style.progressBar} style={{width: `${progress}%`}}/>
      </div>
      <p>{currentStep} / {steps}</p>
    </div>
  )
}

export default Progress