
const Awards = () => {
    return (
        <div className="flex flex-col py-10 border-y-2">
            <h1 className=" text-3xl md:inline-block md:text-5xl font-light">Awards and recognition</h1>
            <div className="flex flex-col md:flex md:justify-between">
                <div className="py-5">
                    <h2 className="">IBM API Connect wins top distinctions</h2>
                    <p className="py-2">IBM API Connect continues to earn multiple top awards that recognize it .</p>
                    {/* <span>Learn more</span> */}
                </div>
                <div>
                    <img className='img-test' alt="Tailwind CSS Navbar component" src=" image-6.png" />
                </div>
            </div>
        </div>
    )
}

export default Awards;
