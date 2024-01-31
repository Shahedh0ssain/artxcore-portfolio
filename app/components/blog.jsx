import Image from "next/image";




const Blog = ({ img }) => {


    return (
        <div className=" card  bg-[#262626] shadow">
            <Image
                width={400}
                height={50}
                src={img}
                alt="dfdf"
                // style={{
                //     width: '100%',
                //     height: 'auto',
                // }}
            />
            <div className="py-8 px-2">
                <div>

                    <p className="p-0 text-white  text-sm md:text-sm lg:text-sm lg:p-3 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>

                </div>
            </div>
        </div>

    )




}

export default Blog;