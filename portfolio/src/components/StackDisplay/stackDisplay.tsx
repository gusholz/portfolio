import React from 'react';
import Image from 'next/image';
import { iconPath } from "@/commons/importPath/ImportPath"
import styles from "./StackDisplay.module.css"
import TitledIcon from '../Icons/titledIcon';

type StackDisplayProps = {
    imageArray: string[];
}


export default function StackDisplay(props: StackDisplayProps) {

    return (
        <div className={styles.stackDisplay}>
            {props.imageArray.map((imageUrl, index) => (
                <span className={styles.stackDisplayIcons} key={index}>
                    <TitledIcon 
                        imageSrc={`${imageUrl}`}
                        titled={imageUrl}
                        alt={`${imageUrl} Icon`}
                    />
                </span>
            ))}
        </div>
    );
}
