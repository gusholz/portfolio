import Image from "next/image";
import { iconPath } from "@/commons/importPath/ImportPath"
import { useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "@/components/Icons/TitledIcon.module.css"

type titledIconProps = {
    imageSrc: string
    titled: string
    alt: string
    imgSize: number
}

export default function TitledIcon(props: titledIconProps) {
    
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className= {`${styles.imageDiv} ${isHovered ? styles.rotateDiv : ''}`}  
            onMouseEnter= {(e) => {setIsHovered(true)}}
            onMouseLeave= {(e) => {setIsHovered(false)}}
            >
            
            <Image
                src= {`${iconPath}${props.imageSrc}`}
                alt= {`${props.alt}`}
                width= {props.imgSize}
                height= {props.imgSize} 
            />

            <h3 className={darkMode ? styles.imageTitleDarkmode: styles.imageTitle}>
                {props.titled}
            </h3>
        </div>
    ); 
}
