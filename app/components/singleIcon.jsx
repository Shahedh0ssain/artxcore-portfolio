
'use client'
import Image from "next/image";

const SingleIcon = ({  icon }) => {


    return (

        <div className="w-full flex flex-col justify-between p-3 group h-[200px] md:h-[200px] lg:h-[218px] md:w-boxWidth   transition-all  ease-in-out border border-gary-500 flex-shrink-0 hover:bg-[#EBEBEB]">
            <Image
                width={50}
                height={10}
                // className="w-[50px]"
                src={icon}
                alt=""

            />


            <div className="flex justify-between ">
                <div>

                    <p>Some text</p>
                    {/* <h4 className={` transform  inset-0 transition-all ease-in-out group-hover:translate-y-full group-hover:opacity-0 `}>
                       
                        {name}
                    </h4>

                    <p className={` transform opacity-0 transition-all ease-in-out duration-5000 delay-5000 group-hover:opacity-100  `}>
                        Another text
                    </p> */}
                </div>
                <div>
                    {/* <Image
                        width={25}
                        height={25}
                        // className="w-[25px] py-2"
                        src="/Right-arrow.png"
                        alt="" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>


        </div>

    )
}
export default SingleIcon;