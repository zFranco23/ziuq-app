import React from 'react'
import { useAppSelector } from '../../../../../store'
import { MobileElm } from '../../../../../utils/responsive';
import Progress from '../Progress/Progress';

import style from './Header.module.scss';

const Header = () => {

    const { quiz, currentStep, steps } = useAppSelector(state => state.clientQuiz);

    if (!quiz) return null;

    const hasStartedQuiz = typeof currentStep === 'number' && typeof steps === 'number';

    return (
        <div className={style.wrapHeader}>
            <div className={style.headerContent}>
                <div>a</div>
                <h1>{quiz.title}</h1>
                <div>c</div>
            </div>
            {hasStartedQuiz &&
                <MobileElm>
                    <Progress currentStep={currentStep} steps={steps} />
                </MobileElm>
            }


        </div>
    )
}

export default Header