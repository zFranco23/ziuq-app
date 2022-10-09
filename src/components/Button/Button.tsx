import React, { FC } from 'react'
import PropTypes from 'prop-types';
import '../../styles/button.scss';
import style from './Button.module.scss';

type Props = {
  text: string,
  disabled?: boolean,
}

const Button: FC<Props> = (props) => {
  const { text, disabled} = props;
  return (
    <button disabled={!!disabled} className={style.button}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}
export default Button