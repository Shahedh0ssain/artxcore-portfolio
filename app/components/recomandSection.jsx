
import Image from "next/image";
import Recomand from "../components/recomand"
import SingleIcon from "../components/singleIcon";

const RecomandSection = () => {
    return (

        <section>

            <div className="py-14">
                <div className="flex flex-col">
                    <h3 className="text-start py-5 text-2xl font-semibold ">Recommended  you</h3>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 py-10">

                        <Recomand></Recomand>
                        <Recomand></Recomand>
                        <Recomand></Recomand>
                    </div>

                </div>

                <div className="md:flex md:justify-between text-start py-5">
                    <h3 className="p-2 text-4xl text-start md:text-5xl font-light text-[#161616]  ">Browse our technology</h3>
                    <div className="p-2">
                        <p className="py-2 text-base font-normal text-black">Lorem Ipsumis simply dummy <span className="text-[#0F62FE]">text of the
                            printing</span> <br /> and typesetting industry.
                            Lorem Ipsum has been
                            the industry's</p>
                        <p className="text-[#0F62FE] py-2 flex items-center">
                            <span> View all products</span>
                            <Image
                                width={25}
                                height={12}
                                className=" ps-2 pt-1 "
                                src="/Right-arrow.png"
                                alt=""

                            />
                        </p>

                        <p className="text-[#0F62FE] py-2 flex items-center">
                            <span>Shop special offer and discount</span>
                            <Image
                                width={25}
                                height={12}
                                className="ps-2 pt-1"
                                src="/Right-arrow.png"
                                alt=""
                            />
                        </p>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-2  md:grid-cols-4  ">
                <SingleIcon name='name' icon='/icon-01.png' ></SingleIcon>
                <SingleIcon name='name' icon='/icon-02.png'></SingleIcon>
                <SingleIcon name='name' icon='/icon-03.png'></SingleIcon>
                <SingleIcon name='name' icon='/icon-04.png'></SingleIcon>
                <SingleIcon name='name' icon='/icon-05.png'></SingleIcon>
                <SingleIcon name='name' icon='/icon-06.png'></SingleIcon>
                <SingleIcon name='name' icon='/icon-07.png'></SingleIcon>
                <SingleIcon name='name' icon='/icon-08.png'></SingleIcon>
            </div>

        </section>

    )
}

export default RecomandSection;