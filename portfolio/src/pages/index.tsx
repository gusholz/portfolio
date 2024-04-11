import Head from "next/head";
import FixedSideBar from "@/components/fixedSideBar/FixedSideBar";
import Callout from "@/components/callout/Callout";
import Tagline from "@/components/tagline/Tagline";
import Section from "@/components/section/Section";
import ProjectsShowcase from "@/components/projectsShowcase/ProjectsShowcase";
import StackDisplay from "@/components/stackDisplay/StackDisplay";
import { IconManager } from "@/commons/iconManager/iconManager";
import styles from "./reset.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gusholz Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Tagline></Tagline>
        <Callout/>
        <FixedSideBar/>

        <Section
          imageUrl= {IconManager.stack}
          inverted = {false}
        >
            <p>
              Here goes an awesome text 
            </p>
        </Section> 
        
        <Section
          imageUrl= {IconManager.stack}
          inverted = {true}
        >
            <StackDisplay
              imageArray={[
                IconManager.reactIcon, 
                IconManager.javascriptIcon,
                IconManager.typescriptIcon,
                IconManager.gitIcon,
                IconManager.swiftIcon
              ]}
            />
        </Section> 
        
        <Section
          imageUrl= {IconManager.design}
          inverted = {false}
        >
           <StackDisplay
              imageArray={[
                IconManager.figmaIcon, 
                IconManager.adobeIllustrator,
              ]}
            />
        </Section> 
        
        <ProjectsShowcase/>
      </main>
    </>
  );
}
