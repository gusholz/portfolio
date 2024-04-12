import styles from "./Callout.module.css"
import { SwitzerExtraboldItalic } from "@/commons/fontManager/fonts";
import { SwitzerThin } from "@/commons/fontManager/fonts";

export default function Callout() {
    return (
        <div className={`${styles.div}`}>
            <h1 className={`${styles.h1} ${SwitzerExtraboldItalic.className}`}>Gustavo Holzmann</h1>
            <h2 className={`${styles.h2} ${SwitzerThin.className}`}>developer & designer</h2>
        </div>
    );
}