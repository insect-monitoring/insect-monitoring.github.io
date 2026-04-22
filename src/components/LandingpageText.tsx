import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './LandingpageText.module.css';
import Link from '@docusaurus/Link';

const LandingpageText: React.FC = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.HeaderContainer}>
        <h4 className={styles.Description}>
          Swedish Insect Monitoring Scheme (SIMS)
        </h4>
        <h4 className={styles.Description}>
          A number of recent studies have indicated alarming declines in insect biomass and diversity, especially in terrestrial ecosystems. However, the available data are patchy and typically record only total biomass or a tiny subset of species, making conclusions uncertain. A major reason for this is that cost-effective inventories of entire insect faunas have been out of reach until the appearance of revolutionary new inventory methods during the last few years. In the Insect Biome Atlas project (IBA), we have helped define the state-of-the-art of such methods, using Malaise traps and high-throughput sequencing of selected markers, so-called DNA metabarcoding. We have also established a unique baseline of the state of the Swedish insect fauna in 2019, based on a full year of sampling at 97 sites. For one third of those sites, we have continued collecting samples since then with the help of volunteers. In the Swedish Insect Monitoring Scheme we extend this data series by continuing to sample until 2027, using our proof-of-concept methodology. This internationally unique 8-year data series will then be used to provide the first long-term trend analyses for the > 99% of the Swedish insect fauna for which little or no reliable information currently exists. The project team includes expertise in all relevant project aspects, from sample and data processing to advanced statistical analyses of community patterns and population trends.
          </h4>
          <h4 className={styles.Description}>
          The Swedish Insect Monitoring Scheme is a collaboration between The Swedish Museum of Natural History, The Swedish University of Agricultural Sciences, the Royal Institute of Technology in Stockholm, Stockholm University and Station Linné. The project is funded by the Olle Engkvists Stiftelse.
        </h4>
      </div>
    </div>
  );
};



export default LandingpageText;



