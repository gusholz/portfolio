import { iconPath } from "@/commons/importPath/ImportPath"
import { IconManager } from "@/commons/iconManager/iconManager"
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import Image from "next/image"
import styles from "./ProjectsShowcase.module.css"

export default function ProjectsShowcase() {
    
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={styles.div}>
            <h2 className={darkMode? styles.titleDarkmode:styles.title}>Latest Projects</h2>
            <div className={styles.flexContainer}>
                <Project
                    title="projeto top 1"
                    imageUrl={IconManager.stack}
                >
                    In this project, me and my coworkers used Next.js alongside React
                    to create a analytics panel that would control multiple devices
                    along the city
                </Project>
                <Project
                    title="projeto top 2"
                    imageUrl={IconManager.stack}
                >
                    In this project, me and my coworkers used Next.js alongside React
                    to create a analytics panel that would control multiple devices
                    along the city
                </Project>
                <Project
                    title="Analytics Dashboard"
                    imageUrl= {IconManager.stack}
                >
                    In this project, me and my coworkers used Next.js alongside React
                    to create a analytics panel that would control multiple devices
                    along the city
                </Project>
            </div>
            <h4 className={darkMode ? styles.goodbyeDarkmode :styles.goodbye}>Thanks for the read!</h4>
        </div>
    );
}

type props = {
    title: string
    imageUrl: string
    children: React.ReactNode
}

function Project(props: props) {
    return (
        <div className= {styles.project}>
            <h3 className= {styles.h3}>{props.title}</h3>
            <Image
                src= {`${iconPath}${props.imageUrl}`}
                alt=""
                width={250}
                height={250}
            />
            <p className={styles.text}>
                {props.children}
            </p>
        </div>
    );
}