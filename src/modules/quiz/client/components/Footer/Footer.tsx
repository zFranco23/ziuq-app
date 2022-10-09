import React, { FC } from 'react'
import Button from '../../../../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { DesktopElm } from '../../../../../utils/responsive';
import { handleCurrentStep } from '../../duck';
import Progress from '../Progress/Progress';

import style from './Footer.module.scss';

type Props = { a?: any }
const Footer: FC<Props> = () => {

    const { currentStep, steps, validatedCurrentStep } = useAppSelector(state => state.clientQuiz);
    const dispatch = useAppDispatch();

    const hasStartedQuiz = typeof currentStep === 'number' && typeof steps === 'number';

    const handleNextStep = () => {
        dispatch(handleCurrentStep())
    }

    return (
        <div className={style.wrapFooter}>
            <div className={style.footerContent}>
                {hasStartedQuiz &&
                    <DesktopElm>
                        <div className={style.containerProgress}>
                            <Progress
                                steps={steps}
                                currentStep={currentStep}
                            />
                        </div>
                    </DesktopElm>
                }
                <Button
                    text='Continue'
                    onClick={handleNextStep}
                    disabled={!validatedCurrentStep}
                />
            </div>
        </div>
    )
}

export default Footer