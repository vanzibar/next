import { Fade, Slide } from "react-awesome-reveal";

import Image from "next/image";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
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
        <div className={styles.headlineWrapper}>
          <Fade className="fade" duration={2500}>
            <div className={styles.headline}>
              <p>
                A software developer with a proven track record delivering of
                high quality software.
              </p>
            </div>
          </Fade>
        </div>
        <div className={`${styles.section} ${styles.secondaryBackground}`}>
          <Fade className={styles.fade}>
            <div className={styles.achievements}>
              <Slide
                className={styles.slide}
                triggerOnce={true}
                duration={1500}
              >
                <div className={styles.achievement}>
                  <MilitaryTechIcon
                    sx={{
                      fontSize: "15rem",
                    }}
                  ></MilitaryTechIcon>
                  <h3>Seasoned</h3>
                  <p>
                    I have over <span>15 years commercial experience</span>,
                    across various types of organisation; from startup, through
                    to large multinationals.
                  </p>
                </div>
                <div className={styles.achievementImageWrapper}></div>
              </Slide>
            </div>
            <div className={styles.achievements}>
              <Slide
                className={styles.slide}
                triggerOnce={true}
                duration={1500}
                direction={"up"}
              >
                <div className={styles.achievement}>
                  <WorkspacePremiumIcon
                    sx={{
                      fontSize: "15rem",
                    }}
                  ></WorkspacePremiumIcon>
                  <h3>Educated</h3>
                  <p>
                    I am educted to <span>Masters</span> level, with
                    distinction.
                  </p>
                </div>
                <div className={styles.achievementImageWrapper}></div>
              </Slide>
            </div>
            <div className={styles.achievements}>
              <Slide
                className={styles.slide}
                triggerOnce={true}
                duration={1500}
                direction={"right"}
              >
                <div className={styles.achievement}>
                  <VerifiedUserIcon
                    sx={{
                      fontSize: "15rem",
                    }}
                  ></VerifiedUserIcon>
                  <h3>Certified</h3>
                  <p>
                    I am a certified <span>Scrum Master</span> and advocate for
                    Agile processes.
                  </p>
                </div>
                <div className={styles.achievementImageWrapper}></div>
              </Slide>
            </div>
          </Fade>
        </div>
        <div className={styles.section}>
          <Fade className={styles.fade}>
            <div className={styles.techSection}>
              <h2>Chosen Tech</h2>
              <div className={styles.techList}>
                <div className={styles.techItem}>
                  <div className={styles.techImageWrapper}>
                    <Image
                      src={"/react.png"}
                      alt={"react"}
                      height={175}
                      width={175}
                    ></Image>
                  </div>
                  <p>React Native</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techImageWrapper}>
                    <Image
                      src={"/typescript-150.png"}
                      alt={"typescript"}
                      height={110}
                      width={110}
                    ></Image>
                  </div>
                  <p>TypeScript</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techImageWrapper}>
                    <Image
                      src={"/redux-150.png"}
                      alt={"redux"}
                      height={110}
                      width={110}
                    ></Image>
                  </div>
                  <p>Redux</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techImageWrapper}>
                    <Image
                      src={"/html-5-192.png"}
                      alt={"HTML"}
                      height={120}
                      width={120}
                    ></Image>
                  </div>
                  <p>HTML</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techImageWrapper}>
                    <Image
                      src={"/css3-150.png"}
                      alt={"css"}
                      height={135}
                      width={135}
                    ></Image>
                  </div>
                  <p>CSS</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techImageWrapper}>
                    <Image
                      src={"/c-sharp-logo-150.png"}
                      alt={"csharp"}
                      height={110}
                      width={110}
                    ></Image>
                  </div>
                  <p>C#</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className={`${styles.section} ${styles.secondaryBackground}`}>
          <Fade className={`${styles.fade} ${styles.highlights}`}>
            <div>
              <h2>Professional Highlights</h2>
              <Slide
                className={styles.slide}
                triggerOnce={true}
                direction={"right"}
                duration={1500}
              >
                <div className={styles.highlight}>
                  <Image
                    src={"/aforza.jpg"}
                    alt={"csharp"}
                    height={554}
                    width={792}
                    className={styles.highlightImage}
                  ></Image>
                  <div>
                    <h3>Aforza</h3>
                    <ul>
                      <li>
                        I am a certified <span>Scrum Master</span> and advocate
                        for Agile processes.
                      </li>
                      <li>
                        I am a certified <span>Scrum Master</span> and advocate
                        for Agile processes.
                      </li>
                      <li>
                        I am a certified <span>Scrum Master</span> and advocate
                        for Agile processes.
                      </li>
                      <li>
                        I am a certified <span>Scrum Master</span> and advocate
                        for Agile processes.
                      </li>
                    </ul>
                  </div>
                </div>
              </Slide>
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}
