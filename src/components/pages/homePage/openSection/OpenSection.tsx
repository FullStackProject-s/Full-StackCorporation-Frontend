import React from 'react'

import { useNavigate } from 'react-router-dom'
import { paths } from 'routing/config'

import styles from './openSection.module.scss'

export const OpenSection: React.FC = () => {

    const navigate = useNavigate()

    return (
        <div className = {styles.openSection}>
            <div className="mainContainer">
                <div className = {styles.openSectionContent}>
                    <div className = {styles.openSectionTextBlock}>
                        <h1><span><span>Gre</span>&Mi</span> brings all your<br/> tasks, teammates, and<br/> tools together</h1>
                        <p>Keep everything in the same place —<br/> even if your team isn't</p>
                        <button onClick = {() => navigate(paths.registrationPage)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
