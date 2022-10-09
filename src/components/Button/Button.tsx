import React, { FC } from 'react'
import PropTypes from 'prop-types';
import '../../styles/button.scss';
import style from './Button.module.scss';

type Props = {
  text: string,
  disabled?: boolean,
  onClick?: () => void,
}

const Button: FC<Props> = (props) => {
  const { text, disabled, onClick } = props;
  return (
    <button disabled={!!disabled} className={style.button} onClick={onClick ? onClick : () => null}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
export default Button