import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Evan Price Personal Site</title>
        <meta
          name="description"
          content="The personal site of Evan Price. Showcasing professional and personal software development projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome To My Personal Site!</h1>

        <p className={styles.description}>
          Intro blurb here. Intro blurb here. Intro blurb here. Intro blurb
          here. Intro blurb here. Intro blurb here. Intro blurb here. Intro
          blurb here. Intro blurb here. Intro blurb here. Intro blurb here.
          Intro blurb here. Intro blurb here. Intro blurb here. Intro blurb
          here. Intro blurb here.
        </p>

        <div>
          <h2>Professional Achievements</h2>
          <p>Find in-depth information about Next.js features and API.</p>
          <h2>Personal Projects</h2>
          <p>Find in-depth information about Next.js features and API.</p>
          <h2>Links</h2>
          <p>Find in-depth information about Next.js features and API.</p>
          <h2>Fun Stuff</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>
      </main>
    </div>
  );
}
