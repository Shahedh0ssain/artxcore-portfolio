import Image from "next/image";




const Blog = ({ img }) => {


    return (
        // <div className=" card  bg-[#262626] shadow">
        //     <Image
        //         width={400}
        //         height={50}
        //         src={img}
        //         alt="dfdf"
        //         className=""

        //     />
        //     <div className="py-8 px-2">
        //         <div>

        //             <p className="p-0 text-white  text-sm md:text-sm lg:text-sm lg:p-3 ">
        //                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text
        //                 ever since the 1500s.
        //             </p>

        //         </div>
        //     </div>
        // </div>
        // <div class="card w-full bg-[#262626] shadow ">

        //     <Image
        //         width={400}
        //         height={50}
        //         src={img}
        //         alt="dfdf"
        //         className="w-full "

        //     />
        //     {/* <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /> */}

        //     <div class="card-body">
        //         <h2 class="card-title text-white ">Life hack</h2>
        //         <p className="py-3 text-white  text-sm md:text-sm lg:text-sm  ">
        //             Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text
        //             ever since the 1500s.
        //         </p>
        //         {/* <div class="card-actions justify-end">
        //             <button class="btn btn-primary">Learn now!</button>
        //         </div> */}
        //     </div>
        // </div>


        <div class="card  bg-[#262626] shadow">
            <figure>
                {/* <Image
                    width={400}
                    height={50}
                    src={img}
                    alt="dfdf"
                    className=""

                /> */}
                <img className="w-full h-auto" src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-white">
                    MY Title
                </h2>
                <p className="text-white">If a dog chews shoes whose shoes does he choose?

                    dog chews shoes whose shoes
                </p>
                {/* <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                </div> */}
            </div>
        </div>
    )




}

export default Blog;