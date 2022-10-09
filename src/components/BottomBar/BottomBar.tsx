import React, { FC } from 'react'
import PropTypes from 'prop-types';

import style from './BottomBar.module.scss';

type Props = {
    children: React.ReactNode
}

const BottomBar: FC<Props> = ({ children }) => {
    return (
        <div className={style.wrap}>{children}</div>
    )
}

BottomBar.propTypes = {
    children: PropTypes.node.isRequired
}
export default BottomBar