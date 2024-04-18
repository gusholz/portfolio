import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./TextSection.module.css"

export default function TextSection(text:{ text: string}) {

    const { darkMode } = useContext(ThemeContext);

    return (
        <p className={darkMode ? styles.paragraphDarkmode :styles.paragraph}>
            {text.text}
        </p>
    );
}