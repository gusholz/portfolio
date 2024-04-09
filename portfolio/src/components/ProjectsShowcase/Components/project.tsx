import Image from "next/image"

type props = {
    title: string
    imageUrl: string
    text: string
}

export default function Project(props: props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <Image
                src = {props.imageUrl}
                alt=""
                width={250}
                height={250}
            />
        </div>
    )
}