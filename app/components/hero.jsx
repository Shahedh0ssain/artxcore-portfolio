
// 'use client'

import Image from "next/image"




const Hero = () => {




    return (
        <section className="">


            <div className="py-14 md:flex  ">

                <div className="w-full md:w-2/4 lg:w-2/5 flex flex-col justify-between ">


                    <div className="">
                        <h1 className="p-3  md:p-4  text-3xl md:inline-block md:text-5xl font-light">
                            Put AI to work with <br /> watsonx
                        </h1>
                    </div>

                    <div className="">
                        <p className="px-3 py-6 text-lg font-medium">
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        </p>
                        <div className="md:flex md:px-3 ">
                            <button className="w-full h-[50px]  mb-2  md:mb-0 md:w-64 md:h-[50px] md:me-5 flex items-center justify-around  rounded-sm bg-[#0F62FE] text-white ">
                                <span>Try for Free</span>
                                <Image
                                    width={25}
                                    height={25}
                                    src="/Right-arrow.png"
                                    alt="" />
                            </button>
                            <button className="w-full h-[50px] mb-2 md:mb-0 md:w-64 md:h-[50px] flex items-center justify-around  rounded-sm bg-[#fff] text-black border">
                                <span>View  product details</span>
                                <Image
                                    width={25}
                                    height={25}
                                    src="/Right-arrow.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>




                <div className="w-full  px-2 py-10  md:m-6  md:w-2/4 lg:w-3/5 md:py-10 md:flex  md:justify-end ">
                    <div className="md:flex">
                        {/* <img srcSet="Movie-player.png" alt="Movie-player" className="w-full md:w-[400px] md:h-[400px] md:me-5" /> */}
                        <Image
                            width={400}
                            height={400}
                            src="/Movie-player.png"
                            alt="Movie-player"
                            className=" md:me-5"
                        // w-full md:w-[400px] md:h-[400px]
                        />
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
                        </div>
                    </div>
                </div>



            </div>

        </section>

    )




}

export default Hero