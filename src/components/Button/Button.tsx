import React from 'react'

import '../../styles/button.scss';
import style from './Button.module.scss';

const Button = () => {
  return (
    <button disabled className={style.button}>Button</button>
  )
}

export default Button