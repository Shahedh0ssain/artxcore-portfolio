import Benefit from "../AnotherPage/benefit";

const Benefits = () => {
    return (
        <>
            <div className="">
                <div className="py-10">
                    <p className=" text-3xl md:inline-block md:text-5xl font-light">
                        IBM API Connect stands <br /> out as an API management <br /> provider                    </p>
                </div>
                <div className="grid grid-cols-3 py-10">
                    <Benefit></Benefit>
                    <Benefit></Benefit>
                    <Benefit></Benefit>
                    <Benefit></Benefit>
                    <Benefit></Benefit>
                </div>

            </div>

        </>
    )
}

export default Benefits;