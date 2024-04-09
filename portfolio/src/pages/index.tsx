import Head from "next/head";
import styles from "@/styles/Home.module.css";
import FixedSideBar from "@/components/FixedSideBar/fixedSideBar";
import Callout from "@/components/Callout/callout";
import Tagline from "@/components/Tagline/tagline";
import Section from "@/components/Section/section";
import ProjectsShowcase from "@/components/ProjectsShowcase/projectsShowcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gusholz Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Tagline></Tagline>
        <Callout/>
        <FixedSideBar/>
        <Section
          imageUrl="static/images/githubIcon.svg"
          inverted = {true}
        >
          <h1>oi</h1>
        </Section> 
        <Section
          imageUrl="static/images/githubIcon.svg"
          inverted = {false}
        >
          <h1>oi</h1>
        </Section> 
        <ProjectsShowcase/>
      </main>
    </>
  );
}
