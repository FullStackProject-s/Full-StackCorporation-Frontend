import React from 'react'

import { OpenSection } from 'components/pages/homePage/openSection/OpenSection'
import { WorkflowSection } from 'components/pages/homePage/workflowSection/WorkflowSection'
import { OurPartnersSection } from 'components/pages/homePage/ourPartnersSection/OurPartnersSection'

import styles from './homePage.module.scss'

export const HomePage: React.FC = () => {
  return (
    <main className = {styles.main}>
      <OpenSection />
      <WorkflowSection />    
      <OurPartnersSection />
    </main>
  )
}
