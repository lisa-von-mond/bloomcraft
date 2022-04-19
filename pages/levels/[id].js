import Head from 'next/head';
import { Game } from '../../components/game';
import levelone from '../../levels/testlevel1';
import leveltwo from '../../levels/testlevel2';

export default function Level({ levelData }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Game levelData={levelData} />
      </main>
    </div>
  );
}

const levels = {
  levelone, // same as levelone:levelone
  leveltwo,
};

export async function getStaticPaths() {
  return {
    // same as [ { params: { id: 'levelone' } }, { params: { id: 'leveltwo' } } ]
    paths: Object.keys(levels).map(id => ({ params: { id } })),
    fallback: false, // gives 404 if no id is matching
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: { levelData: levels[id] }, // will be passed to the page component as props
  };
}

// daten für aktuelles level in props objekt ausgeben lassen
