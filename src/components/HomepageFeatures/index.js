import clsx from 'clsx';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

// Ícones usados nos cards (pode adicionar mais se quiser)
const icons = [
  '/img/Imagem1.svg',
  '/img/Imagem1Branca.svg'
];

// Features/pontos do projeto baseados no resumo e módulos
const FeatureList = [
  {
    title: 'Resumo do Projeto',
    description:
      'Continuação do projeto iniciado pela turma de 2018/2019 do curso técnico em Mecatrônica Bosch/Senai, focado na modernização da produção de garras eletromecânicas com tecnologias da Indústria 4.0, enfrentando desafios de implementação e pandemia.',
    iconBranco: '/img/Imagem1.svg',
    iconPreto: '/img/Imagem1Branca.svg',
  },
  
];

// Lista dos integrantes conforme dados fornecidos
const TeamMembers = [
  ['Gabriel', 'Soares'],
  ['Guilherme', 'Lopes'],
  ['Lucas', 'Rodrigues'],
  ['Pedro', 'Bertolino'],
];

// Componente para cada feature do projeto
function Feature({ iconBranco, iconPreto, title, description }) {
  const { colorMode } = useColorMode();
  const iconToUse = colorMode === 'dark' ? iconPreto : iconBranco ;


  return (
    <div className={styles.featureCard}>
      <img src={iconToUse} alt={`${title} icon`} className={styles.cardIcon} />
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

// Componente para cada membro da equipe
function TeamCard({ firstName, lastName }) {
  return (
    <div className={styles.teamCard}>
      <Heading as="h3" className={styles.teamCardTitle}>
        {firstName}
        <br />
        {lastName}
      </Heading>
    </div>
  );
}

// Componente principal que engloba a seção de features e equipe
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">

        {/* Introdução ao projeto */}
        <div className={styles.introText}>
          <p>
            O projeto <strong>Linha de Montagem 4.0</strong> moderniza a produção de garras eletromecânicas integrando tecnologias da Indústria 4.0 para aumentar eficiência e sincronização na linha de montagem.
          </p>
        </div>

        {/* Módulos/Features */}
        <div className={styles.featuresRow}>
          {FeatureList.map(({ iconBranco, iconPreto, title, description }, idx) => (
            <Feature
              key={title}
              iconBranco={iconBranco}
              iconPreto={iconPreto}
              title={title}
              description={description}
            />
          ))}
        </div>

        {/* Título da seção da equipe */}
        <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
          Integrantes
        </Heading>

        {/* Cards da equipe */}
        <div className={styles.teamSection}>
          <div className={styles.teamCardsRow}>
            {TeamMembers.map(([firstName, lastName]) => (
              <TeamCard key={`${firstName}-${lastName}`} firstName={firstName} lastName={lastName} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
