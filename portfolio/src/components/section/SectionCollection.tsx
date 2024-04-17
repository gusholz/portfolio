import Section from "./Section"
import StackDisplay from "../stackDisplay/StackDisplay"
import TextSection from "../textSection/TextSection"
import { IconManager } from "@/commons/iconManager/iconManager"

export default function SectionCollection() {
    return (
        <>
            <Section
            imageUrl= {IconManager.stack}
            inverted = {false}
            >
                <TextSection
                text = {"Here goes my awesome text talking about how incredible I am at work"}
                />
            </Section> 
            
            <Section
            imageUrl= {IconManager.stack}
            inverted = {true}
            >
                <StackDisplay
                imageArray={[
                    IconManager.reactIcon, 
                    IconManager.javascriptIcon,
                    IconManager.typescriptIcon,
                    IconManager.gitIcon,
                    IconManager.swiftIcon
                ]}
                />
            </Section> 
            
            <Section
            imageUrl= {IconManager.design}
            inverted = {false}
            >
            <StackDisplay
                imageArray={[
                    IconManager.figmaIcon, 
                    IconManager.adobeIllustrator,
                ]}
                />
            </Section> 
        </>
    )
}