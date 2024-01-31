
'use client'

import SingleIcon from "./singleIcon";

const IconSection = () => {

    // icon='Star.png' title='Machine learning' hoverTitle='Machine learningMachine learning'
    return (
        <section className="grid grid-cols-4 py-32">
            <SingleIcon ></SingleIcon>
            <SingleIcon></SingleIcon>
            <SingleIcon></SingleIcon>
            <SingleIcon></SingleIcon>
            <SingleIcon></SingleIcon>
            <SingleIcon></SingleIcon>
            <SingleIcon></SingleIcon>
            <SingleIcon></SingleIcon>
        </section>

    )
}

export default IconSection;