import React from 'react';
import Image from 'next/image';

type StackDisplayProps = {
    imageArray: string[];
}

export default function StackDisplay(props: StackDisplayProps) {
    return (
        <div>
            {props.imageArray.map((imageUrl, index) => (
                <div key={index}>
                    <Image 
                        src={imageUrl}
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>
            ))}
        </div>
    );
}
