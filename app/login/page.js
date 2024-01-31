import Image from "next/image"


const Login = () => {
    return (
        <section className="max-w-screen-2xl mx-auto px-2 py-10  md:px-5 lg:px-5">


            <div className="">
                <div className="md:flex ">

                    <div className="w-full md:w-2/4 lg:w-2/5 flex flex-col justify-center">


                        <form className="mx-3" >
                            <div className="space-y-12">

                                <div className=" ">
                                    <div className=" mb-2">
                                        <h2 className="text-lg	 font-semibold leading-7 text-gray-900 ">Login to Artixcore</h2>

                                    </div>
                                    <div className="divider"></div>

                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block py-2 w-full rounded-t-sm border-b-2  text-gray-900   sm:text-sm sm:leading-6 bg-[#F4F4F4] "
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                        <div className="col-span-full">

                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <a href="#" class="flex items-center justify-between rounded-md border border-transparent bg-[#0F62FE] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                                        <span>Continue</span>
                                                        <Image src="Vector.png" alt="" />

                                                    </a>

                                                </div>
                                            </div>

                                        </div>







                                    </div>
                                    <div className="form-control pt-3">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Remember me</span>
                                            <input type="checkbox" checked="checked" className="checkbox" />
                                        </label>
                                    </div>

                                    <div className="divider"></div>
                                </div>


                            </div>

                            <div className="col-span-full">

                                <div className="mt-2">
                                    <div className="mt-2">
                                        <a href="#" class="flex items-center justify-between rounded-md border-2 border-[#0F62FE]	  bg-[#ffff] px-6 py-3 text-base font-medium text-black  shadow-sm">
                                            <span>create an Artixcore </span>
                                            <Image src="Vector-1.png" alt="" />

                                        </a>

                                    </div>
                                </div>

                            </div>

                            <div className="divider"></div>
                            <p className="text-base">Forget Artixcore? <span className="text-[#0F62FE]">contact Artixcore help desk</span></p>


                        </form>

                    </div>

                    <div className="w-full  px-2 py-10  md:m-6  md:w-2/4 lg:w-3/5 md:py-10 md:flex  md:justify-end ">
                        <div className="md:flex">
                            <Image srcSet="klipartz1.png" alt="Movie-player" className="w-full  md:me-5" />

                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}
export default Login
