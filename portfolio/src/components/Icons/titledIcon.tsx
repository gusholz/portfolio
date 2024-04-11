import Image from "next/image";
import styles from "@/components/Icons/TitledIcon.module.css"
import { iconPath } from "@/commons/importPath/ImportPath"

type titledIconProps = {
    imageSrc: string
    titled: string
    alt: string
}

export default function TitledIcon(props: titledIconProps) {
    const imageSize: number = 80;

    return (
        <div className={styles.imageDiv}>
            <Image
                src= {`${iconPath}${props.imageSrc}`}
                alt= {`${props.alt}`}
                width={imageSize}
                height={imageSize} 
            />
            <h3 className={styles.imageTitle}>
                {props.titled}
            </h3>
        </div>
    );
}
