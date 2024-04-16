import styles from "./TextSection.module.css"

export default function TextSection(text:{ text: string}) {
    return (
        <p className={styles.paragraph}>
            {text.text}
        </p>
    )
}