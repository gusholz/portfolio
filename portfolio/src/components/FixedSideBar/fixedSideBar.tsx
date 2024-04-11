import { IconManager } from "@/commons/iconManager/iconManager";
import TitledIcon from "../Icons/titledIcon";
import styles from "@/components/FixedSideBar/FixedSidebar.module.css"

export default function FixedSideBar() {
    return (
        <div className={styles.fixedSidebar}>
            <TitledIcon
                imageSrc= {IconManager.githubIcon}
                alt="Link for my Github page"
                titled="Github"
            />
            <TitledIcon
                imageSrc= {IconManager.linkedinIcon}
                alt="Link for my Linkedin page"
                titled="Linkedin"
            />
            <TitledIcon
                imageSrc= {IconManager.mailIcon}
                alt="Link for my contact email"
                titled="Email"
            />
        </div>
    );
}