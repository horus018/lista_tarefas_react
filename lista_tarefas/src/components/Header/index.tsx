import FocalPoint from '@/components/Icons/FocalPoint';
import React from 'react';
import styles from './styles.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <FocalPoint />
            <h3 className={styles.welcomeMessage}>Bem-vindo de volta, Marcus</h3>
            <h4 className={styles.dataYear}>Segunda, 01 de dezembro de 2025</h4>
        </header>
    )
}

export default Header;