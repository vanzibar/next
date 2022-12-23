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
          <Fade duration={2500}>
            <div className={styles.headline}>
              <p>
                A software developer with a proven track record delivering of
                high quality software.
              </p>
            </div>
          </Fade>
        </div>
        <div className={`${styles.section} ${styles.secondaryBackground}`}>
          <Slide triggerOnce={true} duration={1500}>
            <div className={styles.achievements}>
              <div className={styles.achievement}>
                <MilitaryTechIcon
                  sx={{
                    fontSize: "15rem",
                  }}
                ></MilitaryTechIcon>
                <h3>Seasoned</h3>
                <p>
                  I have over <span>15 years commercial experience</span>,
                  across various types of organisation; from startup, through to
                  large multinationals.
                </p>
              </div>
              <div className={styles.achievementImageWrapper}></div>
            </div>
          </Slide>
          <div className={styles.achievements}>
            <Slide triggerOnce={true} duration={1500} direction={"up"}>
              <div className={styles.achievement}>
                <WorkspacePremiumIcon
                  sx={{
                    fontSize: "15rem",
                  }}
                ></WorkspacePremiumIcon>
                <h3>Educated</h3>
                <p>
                  I am educted to <span>Masters</span> level, with distinction.
                </p>
              </div>
              <div className={styles.achievementImageWrapper}></div>
            </Slide>
          </div>
          <div className={styles.achievements}>
            <Slide triggerOnce={true} duration={1500} direction={"right"}>
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
        </div>
        <Fade>
          <div className={styles.section}>
            <div>
              {/* <h2>Tech</h2> */}
              <Slide
                triggerOnce={true}
                direction="right"
                delay={500}
                cascade={true}
              >
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
                    <p>Typescript/Javascript</p>
                  </div>
                  <div>
                    <Image
                      src={"/react.png"}
                      alt={"react"}
                      height={175}
                      width={175}
                    ></Image>
                    <p>Redux</p>
                  </div>
                  <div>
                    <Image
                      src={"/react.png"}
                      alt={"react"}
                      height={175}
                      width={175}
                    ></Image>
                    <p>HTML</p>
                  </div>
                  <div>
                    <Image
                      src={"/react.png"}
                      alt={"react"}
                      height={175}
                      width={175}
                    ></Image>
                    <p>CSS</p>
                  </div>
                  <div>
                    <Image
                      src={"/react.png"}
                      alt={"react"}
                      height={175}
                      width={175}
                    ></Image>
                    <p>C#</p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </Fade>
      </div>
    </main>
  );
}
