import React from 'react';
import styles from "./StackDisplay.module.css"
import TitledIcon from '../Icons/titledIcon';

type StackDisplayProps = {
    imageArray: string[];
}

function formatIconName(imageUrl: string): string {
    const commonPart: string = "Icon.svg";
    const result = imageUrl.slice(0, imageUrl.length - commonPart.length);
    return capitalizeFirstLetter(result);
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function StackDisplay(props: StackDisplayProps) {

    const imgSize: number = 80;

    return (
        <div className={styles.stackDisplay}>
            {props.imageArray.map((imageUrl, index) => (
                <span className={styles.stackDisplayIcons} key={index}>
                    <TitledIcon 
                        imageSrc={`${imageUrl}`}
                        titled={formatIconName(imageUrl)}
                        alt={`${imageUrl} Icon`}
                        imgSize={imgSize}
                    />
                </span>
            ))}
        </div>
    );
}
