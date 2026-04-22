import React from 'react';
import Layout from '@theme/Layout';
import styles from './members.module.css';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

// List of current core team
const DarkTreeTeam = [
  {
    name: (<a href="https://www.thetangledlines.de/ela/#section0">Ela Iwaszkiewicz-Eggebrecht</a>),
    image: 'img/Ela_I_E_lab.jpg',
    title: (<>Researcher </>),
    description: (<> Ela holds a PhD in Evolutionary Biology from the Max Planck Institute (Germany) and an MSc in Oceanography from Sorbonne University (France).  
    [contact: ela.iwaszkiewicz@nrm.se]
    </>),
  },
  {
    name: (<a href="https://www.stationlinne.se/sv/about/personal/">Mårten Klinth</a>),
    image: 'img/MartenKlinth.jpg',
    title: (<>Lab Specialist </>),
    description: (<> Mårten received the PhD degree from the Norwegian University of Science and Technology, Norway, in 2025. 
    He focuses on DNA barcoding of insects (both individual specimens and bulk samples) and is in charge of the DNA lab 
    at Station Linné on Öland. [contact: marten@stationlinne.se]
    </>),
  },
  {
    name: (<a href="">Anders Johnson</a>),
    image: 'img/SIMS_round.png',
    title: (<>Lab Specialist </>),
    description: (<> Anders is...
    </>),
  },
  {
    name: (<a href="https://ronquistlab.github.io/people.html">Fredrik Ronquist</a>),
    image: '/img/fredrik.jpg',
    title: (<>Principal Investigator </>),
    description: (<>Fredrik is a Professor of Entomology at the Swedish Museum of Natural History, 
    previously Professor of Systematic Biology at Uppsala University and Computational Science at 
    Florida State University. He has a long track record of research in statistical phylogenetics, 
    generating some of the most widely used software for probabilistic inference in phylogeny and evolution. 
    He also has a long-standing interest in insect diversity and evolution, including automated image-based 
    identification, and leading the Insect Biome Atlas project.</>),
  },
  {
    name: (<a href="">Andreia Miraldo </a>),
    image: 'img/SIMS_round.png',
    //title: (<>Professor</>),
    description: (<> BaSS Portugal </>),
  },
  {
    name: (<a href="https://symbio.eko.uj.edu.pl/en_GB/staff/piotr-lukasik">Piotr Łukasik </a>),
    image: 'img/Piotr_pic.jpg',
    //title: (<>Associated Professor</>),
    description: (<>Associated Professor at Jagiellonian Univbersity in Kraków.</>),
  },
  {
    name: (<a href="https://internt.slu.se/en/cv-originals/tomas-roslin/">Tomas Roslin </a>),
    image: 'img/tomas-roslin.jpg',
    //title: (<>Professor</>),
    description: (<>Professor of insect ecology at the Department of Ecology, Swedish University of Agricultural Sciences (SLU, Uppsala) and Professor of Ecosystems and Environment Research Programme, University of Helsinki, Finland.</>),
  },
  {
    name: (<a href="https://www.su.se/english/profiles/a/atack">Ayco Tack </a>),
    image: 'img/Ayco_Tack.jpg',
    //title: (<>Professor</>),
    description: (<>Professor at the Department of Ecology, Environment and Plant Sciences at Stockholm University.</>),
  },
  {
    name: (<a href="https://www.stationlinne.se/sv/about/personal/">Dave Karlsson</a>),
    image: 'img/Dave_K.jpg',
    title: (<>Station Linné Director </>),
    description: (<> Dave is a Researcher (Doctor in Systematic Zoology) and Managing Director of Station Linné. 
    Taxonomist and naturalist whose research focuses on insect diversity, with a particular emphasis on Hymenoptera (especially Braconidae) 
    and (macro)Lepidoptera. He is deeply involved in education and outreach and has a strong passion for natural history education.</>),
  } 
];

// List of Scientific Advisory Board
const ScientificAdvis= [
  
];

// List of Former Members
// Appear in order
 const FormerMembers = [
  //{
    //name: (<a href="https://www.kth.se/profile/caylak">Gizem Çaylak </a>),
    //image: 'img/caylak.jpg',
    //title: (<>PhD student </>),
    //description: (<>Gizem is a PhD student at KTH Royal Institute of Technology. Her research focuses on developing methods for improving inference 
    //in probabilistic programming languages, with applications to phylogenetic studies.</>),
  //},
];

// List of Collaborators
const Collaborators = [
  {
    name: (<a href="">Want to get Involved?</a>),
    image: 'img/SIMS_round.png',
    //title: (<></>),
    description: (<>We are welcoming collaborations! If you want to get involved with the DarkTree project go to <a href="https://insect-darktree.github.io/involved/get_involved">this page</a> to read more.</>),
  },
];

// --- Person card ---
function Person({name, title, image, description}) {
return (
    <div className={clsx('col col--6', styles.personContainer)}>       
      <div style={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
        {/* Image section */}
        <div className={styles.imageWrapper} style={{ flexShrink: 0 }}>
          <img 
            className={styles.personSvg} 
            alt={String(name)} 
            src={useBaseUrl(image)} 
            style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
          />
        </div>
        {/* Texte Section */}
        <div className="text--left">
          <h3 style={{ margin: 0 }}>{name}</h3>
          <p className={styles.title} style={{ fontWeight: 'bold', marginBottom: '8px' }}>
            {title}
          </p>
          <p className={styles.descriptionText}>
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}

// --- Section renderer (shows just a heading if empty) ---
function PeopleSection({id, title, people}) {
  return (
    <section id={id} className={styles.persons}>
      <div className="container">
        <h2 className={clsx('margin-bottom--lg', styles.sectionTitle)}>{title}</h2>
        {people && people.length > 0 && (
          <div className="row">
            {people.map((p, i) => <Person key={`${id}-${i}`} {...p} />)}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ContributorsPage() {
  return (
    <Layout title="ProjectTeam" description="ProjectTeam">
      <div>
        <PeopleSection
          id="current-team"
          title="DarkTree Team"
          people={DarkTreeTeam}
        />        
        <PeopleSection
          id="former-members"
          title="Former members"
          people={FormerMembers}
        />        
        <PeopleSection
          id="scientific-advisors"
          title="Scientific Advisory Board"
          people={ScientificAdvis}
        />
        <PeopleSection
          id="collaborators"
          title="Collaborators"
          people={Collaborators}
    //    />
    //    <PeopleSection
    //      id="how-to-become-a-contributor"
    //      title="How to become a contributor"
     //     people={[]}
        />
      </div>
    </Layout>
  );
}
