import { Logo } from 'components/ui/svg/Logo'
import React from 'react'

import styles from './footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer className = {styles.footer}>
            <div className="mainContainer">
                <div className={styles.footer_content}>
                    <div className={styles.wrapper}>
                        <p>Frontend</p>
                        <a target="_blank" href = "https://github.com/GregDemidenkov">https://github.com/GregDemidenkov</a>
                    </div>
                    <Logo />
                    <div className={styles.wrapper}>
                        <p>Backend</p>
                        <a target="_blank" href = "https://github.com/MihailGulkin">https://github.com/MihailGulkin</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}