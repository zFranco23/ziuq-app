import React, { FC } from 'react'

import style from './AnswerButton.module.scss';

import { mapOrderToLetter } from '../../helpers';

type Props = {
    idx: number,
    answer: any,
}

const AnswerButton: FC<Props> = (props) => {

    const { idx, answer } = props;

    const orderLetter = mapOrderToLetter(idx);

    return (
        <button className={`${style.answerButton} ${style.answerSuccess}`}>
            <div className={style.order}>
                {/* <span>{orderLetter}</span> */}
                <i className="material-icons">check</i>
            </div>
            <div className={style.answerText}>
                <p>Texto</p>
            </div>
        </button>
    )
}

export default AnswerButton