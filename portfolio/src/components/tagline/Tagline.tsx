import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./Tagline.module.css";

export default function Tagline() {
  const { darkMode } = useContext(ThemeContext);

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
    "}",
  ];

  return (
    <div className={`${styles.div}`}>
      <ul className={`${styles.ulist}`}>
        {taglinePhrases.map((string, index) => (
          <li
            key={index}
            className={`${darkMode ? styles.ulistElementDarkmode : styles.ulistElement}`}
          >
            {string}
          </li>
        ))}
      </ul>
    </div>
  );
}
