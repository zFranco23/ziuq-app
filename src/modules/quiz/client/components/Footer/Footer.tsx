import React, { FC } from 'react'
import Button from '../../../../../components/Button/Button';
import { DesktopElm} from '../../../../../utils/responsive';
import Progress from '../Progress/Progress';

import style from './Footer.module.scss';

type Props = { a?: any }
const Footer: FC<Props> = (props) => {
    return (
        <div className={style.wrapFooter}>
            <div className={style.footerContent}>
                <DesktopElm>
                    <Progress steps={5} currentStep={4} />
                </DesktopElm>
                <Button text='Continue' />
            </div>
        </div>
    )
}

export default Footer