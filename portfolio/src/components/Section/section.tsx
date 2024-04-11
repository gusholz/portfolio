import { ReactElement } from "react"
import Image from "next/image"
import { iconPath } from "@/commons/importPath/ImportPath"
import styles from "./Section.module.css"

type props = {
    imageUrl: string
    inverted: boolean
    children: ReactElement
}

export default function Section(props: props) {
    const imageSize: number = 186;

    return (
        props.inverted ? (
            <div className={styles.section}>
                {props.children}
                <Image
                src= {`${iconPath}${props.imageUrl}`}
                alt= {``}
                width= {imageSize}
                height= {imageSize}
                />
            </div>
        ) : (
            <div className={styles.section}>
                <Image
                src= {`${iconPath}${props.imageUrl}`}
                alt= {``}
                width= {imageSize}
                height= {imageSize}
                />
                {props.children}
            </div>
        )
    )
}