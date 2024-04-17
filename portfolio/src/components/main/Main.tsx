import FixedSideBar from "../fixedSideBar/FixedSideBar";
import Callout from "../callout/Callout";
import Tagline from "../tagline/Tagline";
import ProjectsShowcase from "../projectsShowcase/ProjectsShowcase";
import SectionCollection from "../section/SectionCollection";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";
import styles from "./main.module.css";


export default function Main() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <>
            <main className={darkMode ? styles.mainDarkmode : styles.main}>
            <Tagline />
            <Callout />
            <FixedSideBar />
            <SectionCollection />
            <ProjectsShowcase />
            </main>
        </>
    )
}