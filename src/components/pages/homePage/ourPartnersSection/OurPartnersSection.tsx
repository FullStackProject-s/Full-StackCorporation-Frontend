import React from 'react'

import partners from 'assets/img/partners.svg'
import wave from 'assets/img/wave.svg'

import styles from './ourPartnersSection.module.scss'

export const OurPartnersSection: React.FC = () => {

    return (
        <div className = {styles.ourPartnersSection}>
            <div className="mainContainer">
                <div className = {styles.ourPartnersSectionContent}>
                    <h2>Our Partners</h2>
                    <img src = {partners} alt="partners" />
                </div>
            </div>
            <img src = {wave} alt="wave" />
        </div>
    )
}
