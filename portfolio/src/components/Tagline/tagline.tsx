import styles from "./Tagline.module.css"

export default function Tagline() {
    return (
        <div className={`${styles.div}`}>
            <ul className={`${styles.ulist}`}>
                <li className={`${styles.ulistElement}`}>prototyping</li>
                <li>coding</li>
                <li>designing</li>
                <li>code review</li>
            </ul>
        </div>
    );
}