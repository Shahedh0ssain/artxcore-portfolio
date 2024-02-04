import Image from "next/image"

const OverView = () => {

    return (
        <section className="px-2 py-14">

            {/* part one */}
            <div className="md:flex md:justify-between ">

                <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-between ">


                    <div className="">
                        <h1 className="p-3  md:p-4  text-3xl md:inline-block md:text-5xl font-light">
                            A management solution <br />
                            For the entire APi <br />
                            lifecycle
                        </h1>
                    </div>
                    <p className="px-3 py-6 text-base font-medium">
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    </p>

                    <div className="">

                        <div className="md:flex md:px-3 my-5 ">

                            <Image
                                width={600}
                                height={600}
                                src="/img-01.JPG"
                                alt="img-01"
                                className=" md:me-5"
                            // w-full md:w-[400px] md:h-[400px]
                            />

                        </div>

                    </div>
                </div>


                <div className="w-full  px-2 py-10  md:m-6  md:w-3/12 lg:w-3/12 md:py-10 md:flex  md:justify-end ">
                    <div className="md:flex">

                        <div className="flex flex-col justify-around">
                            <h1 className="text-lg font-medium p-3 text-[#161616]">Latest News</h1>
                            <div className="border-2 p-5 mb-3 md:mb-3 leading-8">
                                <p>Download report</p>
                                <p>Read 5 te c trands for 2024</p>
                                <Image
                                    width={25}
                                    height={25}
                                    // className="w-[25px] py-2"
                                    src="/Right-arrow.png"
                                    alt="" />
                            </div>
                            <div className="border-2 p-5 leading-8">
                                <p>Download report</p>
                                <p>Read 5 te c trands for 2024</p>
                                <Image
                                    width={25}
                                    height={25}
                                    //  className="w-[25px] py-2" 
                                    src="/Right-arrow.png"
                                    alt="" />
                            </div>
                            <div className="border-2 p-5 leading-8">
                                <p>Download report</p>
                                <p>Read 5 te c trands for 2024</p>
                                <Image
                                    width={25}
                                    height={25}
                                    //  className="w-[25px] py-2" 
                                    src="/Right-arrow.png"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            {/* part two */}
            {/* <div className="md:flex md:justify-between md:items-center border-y-2 py-5 md:py-14 ">
                <div className="w-full md:w-7/12 lg:w-7/12">
                    <p className=" text-2xl">
                        IBM has partnered with Noname Security to <br /> deliver advanced API security capabilities.
                    </p>
                </div>
                <div className="w-full   md:w-3/12 lg:w-3/12 
                 ">
                    <p>Noname Security</p>
                </div>
            </div> */}

            {/* part three */}
            {/* <div className="flex flex-col border-b-2 py-5 md:py-14 ">
                <div className="py-10">
                    <p className=" text-3xl md:inline-block md:text-5xl font-light">
                        See how IBM API Connect <br /> has helped businesses                    </p>
                </div>
                <div className="grid grid-cols-3 gap-5 py-10">
                    <div>
                        <div>
                            <h1 className="text-6xl font-bold">6X</h1>
                            <p>faster conversion rates.</p>
                            <span>Learn more </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-6xl font-bold">6X</h1>
                            <p>faster conversion rates.</p>
                            <span>Learn more </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-6xl font-bold">6X</h1>
                            <p>faster conversion rates.</p>
                            <span>Learn more </span>
                        </div>
                    </div>
                </div>
            </div> */}

        </section>
    )
}

export default OverView