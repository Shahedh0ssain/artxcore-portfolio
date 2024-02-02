import Image from "next/image"



function Footer() {
    return (
        <footer className="bg-[#262626]">
            <div className="footer max-w-screen-2xl  mx-auto px-2  md:px-5 lg:px-5     text-white py-14">
                <aside>
                    <Image
                        width={150}
                        height={150}
                        className=" p-5"
                        src="/Logo-Update-white-01.png"
                        alt="" srcset="" />
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>

    )
}

export default Footer