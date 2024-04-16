import { iconPath } from "@/commons/importPath/ImportPath"
import { IconManager } from "@/commons/iconManager/iconManager"
import Image from "next/image"
import styles from "./ProjectsShowcase.module.css"

export default function ProjectsShowcase() {
    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Latest Projects</h2>
            <div>
                <Project
                    title="projeto top 1"
                    text="lalalala"
                    imageUrl={IconManager.stack}
                />
                <Project
                    title="projeto top 2"
                    text="bebebebe"
                    imageUrl={IconManager.stack}
                />
                <Project
                    title="projeto top 3"
                    text="cececece"
                    imageUrl= {IconManager.stack}
                />
                <h4 className={styles.goodbye}>Thanks for the read!</h4>
            </div>
        </div>
    );
}

type props = {
    title: string
    imageUrl: string
    text: string
}

function Project(props: props) {
    return (
        <div className = {styles.project}>
            <h3 className= {styles.h3}>{props.title}</h3>
            <Image
                src= {`${iconPath}${props.imageUrl}`}
                alt=""
                width={250}
                height={250}
            />
            <p>
                props.text
            </p>
        </div>
    );
}