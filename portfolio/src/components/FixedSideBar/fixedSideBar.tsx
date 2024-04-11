import { IconManager } from "@/commons/iconManager/iconManager";
import TitledIcon from "../Icons/titledIcon";
import styles from "./FixedSideBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { iconPath } from "@/commons/importPath/ImportPath";

export default function FixedSideBar() {
    const imgSize: number = 35;

    return (
        <div className={styles.fixedSidebar}>
            <Image
                className={styles.darkModeButton}
                src={`${iconPath}${IconManager.darkModeButton}`}
                alt="Button to toggle the dark mode"
                width={20}
                height={20}
            />
            <Link href="https://github.com/gusholz" className={styles.customLink}>
                <TitledIcon
                    imageSrc= {IconManager.githubIcon}
                    alt="Link for my Github page"
                    titled="Github"
                    imgSize={imgSize}
                />
            </Link>
            <Link href="https://www.linkedin.com/in/gustavo-holzmann/" className={styles.customLink}>
                <TitledIcon
                    imageSrc= {IconManager.linkedinIcon}
                    alt="Link for my Linkedin page"
                    titled="Linkedin"
                    imgSize={imgSize}
                />
            </Link>
            
            <Link href="mailto:gustavobarretohv@live.com" className={styles.customLink}>
                <TitledIcon
                    imageSrc= {IconManager.mailIcon}
                    alt="Link for my contact email"
                    titled="Email"
                    imgSize={imgSize}
                />
            </Link>
        </div>
    );
}