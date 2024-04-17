import styles from "./Callout.module.css"
import { SwitzerExtraboldItalic } from "@/commons/fontManager/fonts";
import { SwitzerThin } from "@/commons/fontManager/fonts";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

export default function Callout() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${styles.div}`}>
            <h1 className={`${darkMode ? styles.h1Darkmode : styles.h1} ${SwitzerExtraboldItalic.className}`}>Gustavo Holzmann</h1>
            <h2 className={`${darkMode ? styles.h2Darkmode : styles.h2} ${SwitzerThin.className}`}>developer & designer</h2>
        </div>
    );
}