import TitledIcon from "../Icons/titledIcon";


export default function FixedSideBar() {
    return (
        <div className={`fixed-sidebar`}>
            <TitledIcon
                imageSrc="github"
                alt="Link for my Github page"
                titled="Github"
            />
            <TitledIcon
                imageSrc="linkedin"
                alt="Link for my Linkedin page"
                titled="Linkedin"
            />
            <TitledIcon
                imageSrc="mail"
                alt="Link for my contact email"
                titled="Email"
            />
        </div>
    )
}