import { ReactElement } from "react";
import Image from "next/image";
import { iconPath } from "@/commons/importPath/ImportPath";
import styles from "./Section.module.css";
import { SwitzerThin } from "../../commons/fontManager/fonts";

type props = {
  imageUrl: string;
  inverted: boolean;
  children: ReactElement;
};

export default function Section(props: props) {
  const imageSize: number = 186;

  return props.inverted ? (
    <div className={`${styles.section} ${SwitzerThin.className}`}>
      {props.children}
      <Image
        src={`${iconPath}${props.imageUrl}`}
        alt={``}
        width={imageSize}
        height={imageSize}
      />
    </div>
  ) : (
    <div className={`${styles.section} ${SwitzerThin.className}`}>
      <Image
        src={`${iconPath}${props.imageUrl}`}
        alt={``}
        width={imageSize}
        height={imageSize}
      />
      {props.children}
    </div>
  );
}
