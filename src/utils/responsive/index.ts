
import { FC } from 'react';
import { useWindowSize } from '../dom';

type Props = {
    children: JSX.Element,
}

export const MobileElm: FC<Props> = ({ children }) => {
    const { width } = useWindowSize();
    return width < 768 ? children : null;

}


export const DesktopElm: FC<Props>= ({ children }) => {
    const { width } = useWindowSize();
    return width >= 768 ? children : null
}