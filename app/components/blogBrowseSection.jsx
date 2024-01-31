import Image from "next/image";




const BlogBrowseSection = () => {


    return (
        <section className="">

            <div className=" py-10 md:py-14 ">

                <div className="md:hero md:flex  md:items-start md:py-5  ">

                    <div className="w-full   md:w-3/5 lg:w-w-3/5 flex justify-end ">
                        <div className="flex">
                            <Image
                                width={500}
                                height={500}
                                src="/blog.png"
                                alt="/Movie-player"
                                className="w-full me-5" />
                            {/* w-[300px] h-[300px] */}
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col justify-around pt-5">

                        <div className="flex flex-col justify-around ps-5">
                            <h1 className="pb-5 font-medium	 text-lg">How AI Academy works</h1>
                            <div className="pb-5">
                                <p className=" pb-5 border-b-2 inline-block">Meet AI Academy: Get the knowledge to <br />
                                    prioritize Ai</p>
                                <p>Read 5 te c trands for 2024</p>
                                <Image
                                    width={20}
                                    height={20}
                                    src="/Right-arrow.png" alt="" />
                            </div>
                            <div className="pb-5">
                                <p className=" pb-5 border-b-2 inline-block">Meet AI Academy: Get the knowledge to <br />
                                    prioritize Ai</p>
                                <p>Read 5 te c trands for 2024</p>
                                <Image
                                    width={20}
                                    height={20}
                                    src="/Right-arrow.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="md:flex  ">
                    <h2 className=" p-2 text-4xl text-start md:text-5xl font-light text-[#161616]  ">Browse our technology</h2>
                    <div className="p-2 md:ps-14">
                        <p className="text-xl font-light leading-8 text-[#161616]">
                            From our flagship products for enterprise <br /> hybrid cloud infrastructure to next-generation AI, security and  <br />storage solutions, find the answer to your business challenge.
                        </p>
                        <p className="text-[#0F62FE] py-2 flex items-center">
                            <span>Text of the printing</span>
                            <Image
                                width={25}
                                height={12}
                                className="pt-1 ps-2 "
                                src="/Right-arrow.png"
                                alt=""

                            />
                        </p>
                        {/* <p className="py-2 text-lg font-medium text-[#0F62FE]"> text of the printing</p> */}
                    </div>
                </div>
            </div >
        </section>

    )




}

export default BlogBrowseSection;