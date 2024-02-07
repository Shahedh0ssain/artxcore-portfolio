import Image from "next/image";


const Recomand = () => {
    return (
        <div className="relative m-3">

            {/* <div className="card w-full  bg-[#0F62FE] shadow-xl   ">
                {/* <Image
                    width={400}
                    height={400}
                    className=" absolute left-1 -top-4 bottom-2 rotate-15 scale-105"
                    src="/Group2.png"
                    alt="sds" /> */}

            {/* <div className="card-body  ">
                    <div className="flex py-7">
                        <Image
                            width={80}
                            height={50}
                            className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] "
                            src="/images1.png"
                            alt=""
                        />
                        <div className="ps-3">
                            <h5 className="text-white">Free Trial</h5>
                            <p className="text-white text-xs md:text-base">Lorem Ipsum is simply
                                dummy text of the printing
                            </p>
                        </div>
                    </div>
                </div>
            </div>  */}

            <div class="card card-side  bg-gray-900 shadow-xl   py-5">

                {/* <img className="ms-3" src="/images1.png" alt="Movie" /> */}
                <Image
                    width={80}
                    height={50}
                    // className="w-full h-auto"
                    className=" m-5 w-[90px] h-[90px] md:w-[100px] md:h-[100px] "
                    src="/images1.png"
                    alt=""
                />

                <div class="card-body">
                    <h2 class="card-title text-white">Free Trial</h2>
                    <p className="text-white">Click the button to watch on Jetflix app.</p>

                </div>
            </div>
        </div>
    )
}

export default Recomand;