import { Fade, Slide } from "react-awesome-reveal";

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
          <Image
            src={"/headshot.jpg"}
            alt={"headshot"}
            height={175}
            width={175}
            className={styles.headerImg}
          ></Image>
          <p className={styles.description}>
            Seasoned software developer | Proven leader | Proud dad
          </p>
        </div>
        <div>
          <Fade>
            <div className={styles.section}>
              <h1>Background</h1>
              <p className={styles.headline}>
                A passionate technology specialist with 15 years experience in
                the industry, with a proven track record of learning new
                technologies and guiding others in the delivery of high quality
                software.
              </p>
              <div className={styles.achievements}>
                <Slide direction="right" triggerOnce={true}>
                  <h2>Achievements</h2>
                  <div className={styles.techList}>
                    <p>React Native</p>
                    <p>React</p>
                    <p>Typescript</p>
                    <p>C#</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React Native</p>
                  </div>
                </Slide>
              </div>
              <div>
                <Slide direction="right" delay={500} triggerOnce={true}>
                  <h2>Tech</h2>
                  <div className={styles.techList}>
                    <div>
                      <Image
                        src={"/react.png"}
                        alt={"react"}
                        height={175}
                        width={175}
                      ></Image>
                      <p>React Native</p>
                    </div>
                    <div>
                      <Image
                        src={"/react.png"}
                        alt={"react"}
                        height={175}
                        width={175}
                      ></Image>
                      <p>React Native</p>
                    </div>
                    <div>
                      <Image
                        src={"/react.png"}
                        alt={"react"}
                        height={175}
                        width={175}
                      ></Image>
                      <p>React Native</p>
                    </div>
                    <div>
                      <Image
                        src={"/react.png"}
                        alt={"react"}
                        height={175}
                        width={175}
                      ></Image>
                      <p>React Native</p>
                    </div>
                    <div>
                      <Image
                        src={"/react.png"}
                        alt={"react"}
                        height={175}
                        width={175}
                      ></Image>
                      <p>React Native</p>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className={styles.section}>
              <h1>Personal Projects</h1>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Fade>
          <Fade>
            <div className={styles.section}>
              <h1>Links</h1>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Fade>
          <Fade>
            <div className={styles.section}>
              <h1>Fun Stuff</h1>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
}
