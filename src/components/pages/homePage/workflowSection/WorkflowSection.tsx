import React from 'react'

import styles from './workflowSection.module.scss'

export const WorkflowSection: React.FC = () => {

    return (
        <div className = {styles.workflowSection}>
            <div className="mainContainer">
                <div className = {styles.workflowSectionContent}>
                    <div className = {styles.workflowSection_title}>
                        <p><span>Gre<span>&Mi</span></span> in action</p>
                        <h3>Workflows for any project, big or small</h3>
                    </div>
                    <div className = {styles.workflowSection_carts}>
                        <div className = {styles.workflowSection_carts__cart}>
                            <div className = {`${styles.cartHelmet} ${styles.orangeHelmet}`}></div>
                            <p className = {styles.cart_title}>Organizations</p>
                            <p className = {styles.cart_text}>Create an organization or join an existing one and become part of a working organism</p>
                        </div>
                        <div className = {styles.workflowSection_carts__cart}>
                            <div className = {`${styles.cartHelmet} ${styles.grayHelmet}`}></div>
                            <p className = {styles.cart_title}>Teams</p>
                            <p className = {styles.cart_text}>Create teams, assign them to projects, and manage tasks</p>
                        </div>
                        <div className = {styles.workflowSection_carts__cart}>
                            <div className = {`${styles.cartHelmet} ${styles.greenHelmet}`}></div>
                            <p className = {styles.cart_title}>Projects</p>
                            <p className = {styles.cart_text}>Create and manage projects, allocate staff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
