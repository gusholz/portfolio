import Image from "next/image";
import styles from "@/components/Icons/TitledIcon.module.css"
import { iconPath } from "@/commons/importPath/ImportPath"

type titledIconProps = {
    imageSrc: string
    titled: string
    alt: string
    imgSize: number
}

export default function TitledIcon(props: titledIconProps) {

    return (
        <div className={styles.imageDiv}>
            <Image
                src= {`${iconPath}${props.imageSrc}`}
                alt= {`${props.alt}`}
                width={props.imgSize}
                height={props.imgSize} 
            />
            <h3 className={styles.imageTitle}>
                {props.titled}
            </h3>
        </div>
    ); 
}
