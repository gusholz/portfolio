import Section from "./Section"
import StackDisplay from "../stackDisplay/StackDisplay"
import TextSection from "../textSection/TextSection"
import { IconManager } from "@/commons/iconManager/iconManager"
import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

export default function SectionCollection() {
    
    const {darkMode} = useContext(ThemeContext);

    return (
        <>
            <Section
            imageUrl= {IconManager.stack}
            inverted = {false}
            >
                <TextSection
                text= {"Here goes my awesome text talking about how incredible I am at work"}
                />
            </Section> 
            
            <Section
            imageUrl= {IconManager.stack}
            inverted = {true}
            >
                <StackDisplay
                imageArray={
                    darkMode ? [
                        IconManager.react_darkmodeIcon, 
                        IconManager.javascript_darkmodeIcon,
                        IconManager.typescript_darkmodeIcon,
                        IconManager.git_darkmodeIcon,
                        IconManager.swift_darkmodeIcon
                    ] : [
                        IconManager.reactIcon, 
                        IconManager.javascriptIcon,
                        IconManager.typescriptIcon,
                        IconManager.gitIcon,
                        IconManager.swiftIcon    
                    ]
                }
                />
            </Section> 
            
            <Section
            imageUrl= {IconManager.design}
            inverted = {false}
            >
            <StackDisplay
                imageArray={
                    darkMode ? [
                        IconManager.figma_darkmodeIcon, 
                        IconManager.adobeIllustratorDarkmode
                    ] : [
                        IconManager.figmaIcon, 
                        IconManager.adobeIllustrator
                    ]
                }
                />
            </Section> 
        </>
    );
}