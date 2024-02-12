'use client'


import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ListItem from "../listItems";
import items from '../../lib/items'
import MobileMenu from "./mobileManu";
import SubManu from "./subManu";
import Link from "next/link";


const Navber = () => {

    const [openItem, setOpenItem] = useState(null);
    const [selectedSubmenu, setSelectedSubmenu] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navbarRef = useRef(null);



    const handleOutsideClick = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            // Clicked outside the 2nd div, set openItem to null
            setOpenItem(null);
        }
    };


    useEffect(() => {


        document.addEventListener('click', handleOutsideClick);


        return () => {

            document.removeEventListener('click', handleOutsideClick);
        };

    }, [openItem]);




    const handleItemClick = (item) => {
        setOpenItem((prevOpenItem) => (prevOpenItem === item ? null : item));
        setSelectedSubmenu(null);
    };



    const handleToggleDrawer = () => {
        console.log("call")
        setIsDrawerOpen(!isDrawerOpen);
    };



    return (
        <header className={`sticky top-0 right-0 left-0 z-50 ${openItem ? 'overlay  ' : ''}`}>
            <div className={`bg-white   border-b `}>
                <div className={`  max-w-screen-2xl mx-auto px-2  md:px-10 lg:px-10 navbar p-0 min-h-3 `}>


                    <div className="navbar-start ">
                        <div className="dropdown">

                            <div className="menu-icon md:hidden" onClick={handleToggleDrawer}>
                                {isDrawerOpen ?
                                    <div className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                    :
                                    <div className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>

                                    </div>

                                }
                            </div>
                            {isDrawerOpen && (

                                <ul tabindex="0" className="menu menu-sm md:hidden absolute leftMobileNav right-0 top-6 mt-3 z-[1] p-2 shadow bg-white  w-screen h-screen">

                                    {/* mobile manu option */}
                                    <MobileMenu items={items}></MobileMenu>


                                </ul>
                            )}
                        </div>
                        <div className="btn btn-ghost ps-0 text-xl">
                            <Link href={`/`}>
                                <Image
                                    width={40}
                                    height={40}
                                    className=""
                                    src="/Logo-Update-2.png"
                                    alt=""
                                />
                            </Link>

                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0 m-0">

                                {items.map((menuItem, index) => (
                                    <ListItem
                                        key={index}
                                        item={menuItem}
                                        isOpen={openItem === menuItem.label}
                                        onItemClick={handleItemClick}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <button className="btn btn-ghost pe-0 btn-circle">
                            <Image
                                width={20}
                                height={20}
                                src='/Index.png' />
                        </button>
                        <Link href={`/registration`}>
                            <button onClick={() => setOpenItem(null)} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <Image
                                        width={20}
                                        height={20}
                                        src='/User.png' />
                                </div>
                            </button>
                        </Link>


                    </div>

                </div>


            </div>

            {/* full screen sub manu  */}
            <div ref={navbarRef}>
                <SubManu  items={items} openItem={openItem} setOpenItem={setOpenItem}></SubManu>

            </div>


        </header >
    )
}

export default Navber;