import Image from "next/image"



function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className=" footer  max-w-screen-2xl  mx-auto px-2  md:px-5 lg:px-5     text-white py-14">
                <aside>
                    <Image
                        width={150}
                        height={150}
                        className=" p-5"
                        src="/Logo-Update-white-01.png"
                        alt="" srcset="" />
                </aside>
                <nav className="">
                    <header className="footer-title px-2 ">Services</header>
                    <div className="flex md:flex-col">
                        <a className="link link-hover px-2 md:py-2">Branding</a>
                        <a className="link link-hover px-2 md:py-2">Design</a>
                        <a className="link link-hover px-2 md:py-2">Marketing</a>
                        <a className="link link-hover px-2 md:py-2">Advertisement</a>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title px-2">Company</header>
                    <div className="flex  md:flex-col">
                        <a className="link link-hover px-2 md:py-2">About us</a>
                        <a className="link link-hover px-2 md:py-2">Contact</a>
                        <a className="link link-hover px-2 md:py-2">Jobs</a>
                        <a className="link link-hover px-2 md:py-2">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title px-2">Legal</header>
                    <div className="flex  md:flex-col">
                        <a className="link link-hover px-2 md:py-2">Terms of use</a>
                        <a className="link link-hover px-2 md:py-2">Privacy policy</a>
                        <a className="link link-hover px-2 md:py-2">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </footer>

    )
}

export default Footer