import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './LandingpageText.module.css';
import Link from '@docusaurus/Link';

const LandingpageText: React.FC = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.HeaderContainer}>
        <h4 className={styles.sectionTitle}>
          Swedish Insect Monitoring Scheme - SIMS 
        </h4>
        <h4 className={styles.Description}>
          Insects are essential to healthy ecosystems, yet we know surprisingly little about how most species are changing. The Swedish Insect Monitoring Scheme (SIMS) is building a unique, long-term record of Sweden’s insect fauna to reveal trends in insect diversity and populations.
          <h4 className={styles.Description}>
          Using Malaise traps and DNA metabarcoding, SIMS builds on a nationwide baseline established in 2019 and continued monitoring at selected sites. This internationally unique eight-year dataset will provide new insights into long-term changes across more than 99% of Sweden’s insect fauna—groups for which reliable trend data are largely lacking.
          </h4>
          <h4 className={styles.Description}>
          The Swedish Insect Monitoring Scheme is based at the Station Linné on Öland and is a collaboration with The Swedish Museum of Natural History, The Swedish University of Agricultural Sciences and Stockholm University. The project is funded by the Olle Engkvists Stiftelse.
        </h4>
      </div>
    </div>
  );
};



export default LandingpageText;



