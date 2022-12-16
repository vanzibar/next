import Head from "next/head";
import Image from "next/image";
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
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>Hey There! I&apos;m Evan!</h1>
          <div
            style={{
              borderRadius: "50%",
              height: 300,
              width: 300,
            }}
          >
            <Image
              height={200}
              width={300}
              src={"/headshot.jpeg"}
              alt={"headshot"}
              style={{ borderRadius: "50%" }}
            ></Image>
          </div>
          <p className={styles.description}>
            Seasoned software developer <span className="neon">|</span> Proven
            leader <span className="neon">|</span> Proud dad
          </p>
        </div>
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
