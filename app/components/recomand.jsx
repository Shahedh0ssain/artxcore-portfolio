import Image from "next/image";


const Recomand = () => {
    return (
        <div className="relative m-3">

            <div className="card w-full  bg-[#0F62FE] shadow-xl   ">
                <Image
                    width={400}
                    height={400}
                    className=" absolute left-1 -top-4 bottom-2 rotate-15 scale-105"
                    src="/Group2.png"
                    alt="sds" />

                <div className="card-body  ">
                    <div className="flex py-7">
                        <Image
                            width={80}
                            height={50}
                            // className="w-[90px] h-[90px]"
                            src="/images1.png"
                            alt=""
                        />
                        <div className="ps-3">
                            <h5 className="text-white">Free Trial</h5>
                            <p className="text-white text-xs md:text-sm">Lorem Ipsum is simply
                                dummy text of the printing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomand;