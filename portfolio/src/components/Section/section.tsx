import { ReactElement } from "react"
import Image from "next/image"

type props = {
    imageUrl: string
    inverted: boolean
    children: ReactElement
}

export default function Section(props: props) {
    return (
        props.inverted ? (
            <div className={``}>
                {props.children}
                <Image
                src= {props.imageUrl}
                alt= {``}
                width= {186}
                height= {186}
                />
            </div>
        ) : (
            <div className={``}>
                <Image
                src= {props.imageUrl}
                alt= {``}
                width= {186}
                height= {186}
                />
                {props.children}
            </div>
            
        )
    )
}