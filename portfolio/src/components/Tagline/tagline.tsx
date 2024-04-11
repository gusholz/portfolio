import styles from "./Tagline.module.css"

export default function Tagline() {

    const taglinePhrases: string[] = [
        "{",
        "prototyping",
        "designing",
        "coding",
        "code review",
        "unitary tests",
        "Continuos Integration",
        "coding",
        "code review",
        "unitary tests",
        "Continuos Integration",
        "}"
    ]

    return (
        <div className={`${styles.div}`}>
            <ul className={`${styles.ulist}`}>
                {taglinePhrases.map((string, index) => (
                    <li key={index} className={`${styles.ulistElement}`}>{string}</li>
                ))}
            </ul>
        </div>
    );
}