import styles from './Carousel.module.css';
import { ReactNode } from 'react';
import IconLink from '../IconLink/IconLink';
import ArrowForwardIco from '../../assets/public/arrow_forward.ico';
import BackForwardIco from '../../assets/public/arrow_back.ico';

type Props = {
    readonly title: string;
    readonly children: ReactNode;
    readonly onNext: () => void;
    readonly onPrev: () => void;
    readonly canNext: boolean;
    readonly canPrev: boolean;
};

function Carousel({ title, children, onNext, onPrev, canNext, canPrev }: Props) {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_container}>{children}</div>
            <div className={styles.carousel_controls}>
                <IconLink src={BackForwardIco} alt='Atrás' onClick={onPrev} disabled={!canPrev} />
                <h2 className={styles.carousel_title}>{title}</h2>
                <IconLink src={ArrowForwardIco} alt='Adelante' onClick={onNext} disabled={!canNext} />
            </div>
        </div>
    );
}

export default Carousel;
