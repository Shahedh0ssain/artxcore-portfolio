import Image from "next/image"
import Link from "next/link"


const Registration = () => {
    return (
        <section className="max-w-screen-2xl mx-auto px-2 py-10  md:px-5 lg:px-5">


            <div className="">
                <div className="md:flex ">
                    <div className="w-full  px-2 py-10  md:m-6  md:w-2/4 lg:w-3/5 md:py-10 md:flex  md:justify-end ">
                        <div className="md:flex">
                            <Image
                                width={900}
                                height={500}
                                src="/klipartz1.png"
                                alt="Movie-player"
                                className="md:me-5" />


                        </div>
                    </div>

                    <div className="w-full md:w-2/4 lg:w-2/5 flex flex-col justify-between ">


                        <form className="mx-3" >
                            <div className="space-y-12">

                                <div className=" ">
                                    <div className="border-b-2">
                                        <h2 className="py-1 text-2xl font-semibold leading-7 text-gray-900 ">Create an Artixcore </h2>

                                        <Link href={`/login`}>
                                            <p className="py-1 m-1 text-base leading-6 text-gray-600">Already have Artixcore Account? <span className="text-[#0F62FE]">Login</span></p>

                                        </Link>


                                    </div>

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

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block py-2 w-full rounded-t-sm border-b-2  text-gray-900   sm:text-sm sm:leading-6 bg-[#F4F4F4]"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block py-2 w-full rounded-t-sm border-b-2  text-gray-900   sm:text-sm sm:leading-6 bg-[#F4F4F4]"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
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

                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Country or region of residence
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block py-2 w-full rounded-t-sm border-b-2  text-gray-900   sm:text-sm sm:leading-6 bg-[#F4F4F4]"
                                                />
                                            </div>
                                        </div>




                                        <div className="sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                state or prvince
                                            </label>

                                            <div className="mt-2">
                                                <input

                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block py-2 w-full rounded-t-sm border-b-2  text-gray-900   sm:text-sm sm:leading-6 bg-[#F4F4F4]"
                                                />
                                            </div>

                                        </div>


                                        <div className="col-span-full">
                                            {/* <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                Street address
                                            </label> */}
                                            <div className="mt-2">
                                                <input
                                                    value='Verify email'
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="block p-2 w-full rounded-t-sm border-b-2  text-gray-900   sm:text-sm sm:leading-6 bg-[#F4F4F4]"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            {/* <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                Country
                                            </label> */}

                                            <div className="mt-2">
                                                <a href="#" class="flex items-center justify-center rounded-sm border border-transparent bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Create Account</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>

                        </form>
                    </div>

                </div>
            </div>

        </section>
    )
}
export default Registration
