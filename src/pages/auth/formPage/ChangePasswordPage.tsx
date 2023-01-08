import React from 'react'

import { ChangePasswordForm } from 'components/pages/auth/ChangePasswordForm';

import styles from 'pages/auth/formPage/auth.module.scss'

export const ChangePasswordPage: React.FC = () => {

    return (
        <section className = {styles.sectionForm}>
            <ChangePasswordForm />
        </section>
    );
}