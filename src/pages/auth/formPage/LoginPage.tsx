import React from 'react'

import { FormLinks } from 'components/pages/auth/FormLinks';
import { LoginForm } from 'components/pages/auth/LoginForm';

import styles from 'pages/auth/formPage/auth.module.scss'

export const LoginPage: React.FC = () => {

    return (
        <section className = {styles.sectionForm}>
            <FormLinks />
            <LoginForm />
        </section>
    );
}