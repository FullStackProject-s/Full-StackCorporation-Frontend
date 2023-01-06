import React from 'react'

import { FormLinks } from 'components/pages/auth/FormLinks';
import { RegistrationForm } from 'components/pages/auth/RegistrationForm';

import styles from 'pages/auth/formPage/auth.module.scss'

export const RegistrationPage: React.FC = () => {

    return (
        <section className = {styles.sectionForm}>
            <FormLinks />
            <RegistrationForm />
        </section>
    );
}