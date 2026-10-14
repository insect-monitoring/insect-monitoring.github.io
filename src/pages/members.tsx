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
    title: (<>Research Lead </>),
    description: (<> Ela is an evolutionary biologist specialising in insect biodiversity monitoring using DNA-based methods. Her work involves metabarcoding as well as individual insect barcoding and development of insect abundance quantification methods. Ela holds a PhD in Evolutionary Biology from the Max Planck Institute (Germany) and an MSc in Oceanography from Sorbonne University (France).  
    [contact: ela.iwaszkiewicz@nrm.se]
    </>),
  },
  {
    name: (<a href="https://www.stationlinne.se/sv/about/personal/">Mårten Klinth</a>),
    image: 'img/MartenKlinth.jpg',
    title: (<>Lab Specialist </>),
    description: (<> Mårten received the PhD degree from the Norwegian University of Science and Technology, Norway, in 2025. 
    He focuses on DNA barcoding of insects (both individual specimens and bulk samples) and is in charge of the DNA lab 
    at Station Linné on Öland. He also works with Ela in the Swedish Insect Monitoring Scheme. [contact: marten@stationlinne.se]
    </>),
  },
  {
    name: (<a href="">Anders Johnson</a>),
    image: 'img/SIMS_round.png',
    title: (<>Bioinformatician </>),
    description: (<>Few words about Anders...
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
];

// List of Former Members
// Appear in order
const FormerMembers = [
  {
    name: (<a href="https://www.kth.se/profile/caylak">Gizem Çaylak </a>),
    image: 'img/caylak.jpg',
    title: (<>PhD student </>),
    description: (<>Gizem is a PhD student at KTH Royal Institute of Technology. Her research focuses on developing methods for improving inference 
    in probabilistic programming languages, with applications to phylogenetic studies.</>),
  },
];

// List of Scientific Advisory Board
const ScientificAdvis= [
  {
    name: (<a href="">Andreia Miraldo </a>),
    image: 'img/SIMS_round.png',
    //title: (<>Associated Professor</>),
    description: (<>Andreia !</>),
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
    //title: (<>Principal Investigator </>),
    description: (<> Dave is a Researcher (Doctor in Systematic Zoology) and Managing Director of Station Linné. 
    Taxonomist and naturalist whose research focuses on insect diversity, with a particular emphasis on Hymenoptera (especially Braconidae) 
    and (macro)Lepidoptera. He is deeply involved in education and outreach and has a strong passion for natural history education.</>),
  } 
];

// List of Collaborators
const Collaborators = [
  {
    name: (<a href="https://">Tilia Häggström </a>),
    image: 'img/Tilia_Haggstrom.jpg',
    title: (<>MSc student</>),
    description: (<>Tilia is a MSc student at Uppsala University with a BSc in molecular biology from Uppsala university. Her BSc thesis was on gallmidges (Cecidomyiidae), which will also be the topic of her MSc thesis. She focuses on combining molecular and morphological characters for identification of mycophagous Cecidomyiidae and their phylogenetic relatinships.</>),
  },
  {
    name: (<a href="https://">Fabian Lundell </a>),
    image: 'img/FabianLundell.jpg',
    title: (<>MSc student</>),
    description: (<>Fabian is a MSc student at Uppsala University who specializes in braconid wasps (Family Braconidae) 
    which was the focus of his BSc thesis. He also does braconid research at Station Linné together with Dave Karlsson and Mårten Klinth.</>),
  },
  {
    name: (<a href="https://">Cristina Lupaşcu-Vasilița</a>),
    image: 'img/Vasilita.jpg',
    title: (<>Researcher</>),
    description: (<>Doctoral candidate at the State Museum of Natural History in Stuttgart, Department of Entomology, focusing on dark taxa. Researcher at the Karlsruhe Institute of Technology focusing on the integration of synchrotron-based CT-scanning and DNA sequencing of insects. </>),
  },
  {
    name: (<a href="https://www.ips.kit.edu/2890_5177.php">Thomas van de Kamp</a>),
    image: 'img/Kamp.jpg',
    title: (<>Researcher</>),
    description: (<>Head of the IPS/LAS BioLab at Karlsruhe Institute of Technology. PI for morphological imaging in life sciences. Coordinator for the research topic “Building Blocks of Life” within the Helmholtz program “From Matter to Materials and Life”.</>),
  },
  {
    name: (<a href="">Emily Hartop</a>),
    image: 'img/Hartopsquare.jpg',
    title: (<>Researcher</>),
    description: (<>Emily is an Associate Professor at NTNU in Trondheim, Norway. She is an entomologist specialising in dark taxa, with a focus on scuttle flies (Diptera: Phoridae). She contributes taxonomic expertise on hyperdiverse and under-described insect lineages within the DarkTree project.</>),
  },
  {
    name: (<a href="">Jessica Awad</a>),
    image: 'img/JessAwad.jpg',
    title: (<>Researcher</>),
    description: (<>Jessica is a Researcher at Naturalis Biodiversity Center in Leiden, Netherlands. She is an entomologist specialising in dark taxa, with a focus on microscopic parasitoid wasps that lay their eggs inside gall midges (Hymenoptera: Platygastrinae). </>),
  },
  {
    name: (<a href="">Want to get Involved?</a>),
    image: 'img/DarkTreeLogo.png',
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