import Image from "next/image";

type titledIconProps = {
    imageSrc: string
    titled: string
    alt: string
}

export default function TitledIcon(props: titledIconProps) {
    const baseImportUrl: string = `/static/images/`

    return (
        <div className={`image-div`}>
            <Image
                src={`${baseImportUrl}${props.imageSrc}Icon.svg`}
                alt={`${props.alt}`}
                width={93}
                height={93}
            />
            <h3 className={`image-title`}>
                {props.titled}
            </h3>
        </div>
    );
}
