'use client'


import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ListItem from "./listItems";
import items from './../lib/items'
import MobileMenu from "./mobileManu";
import SubManu from "./subManu";


const Navber = () => {

    const [openItem, setOpenItem] = useState(null);
    const [selectedSubmenu, setSelectedSubmenu] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    // useEffect(() => {

    //     if (openItem) {
    //         document.body.classList.add('overflow-hidden');
    //     } else {
    //         document.body.classList.remove('overflow-hidden');
    //     }

    //     // Cleanup the class on component unmount
    //     return () => {
    //         document.body.classList.remove('overflow-hidden');
    //     };
    // }, [openItem]);

    const navbarRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                // Clicked outside the navbar, close it
                setIsDrawerOpen(false);
                setOpenItem(null);
                setSelectedSubmenu(null);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    

    const handleItemClick = (item) => {
        setOpenItem((prevOpenItem) => (prevOpenItem === item ? null : item));
        setSelectedSubmenu(null);
    };



    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };



    return (
        <header ref={navbarRef} className={`sticky top-0 right-0 left-0 z-50 ${openItem ? 'overlay' : ''}`}>
            <div className={` bg-white   border-b`}>
                <div className={` max-w-screen-2xl mx-auto px-2  md:px-10 lg:px-10 navbar p-0 min-h-3 `}>


                    <div class="navbar-start ">
                        <div class="dropdown">

                            <div className="menu-icon md:hidden" onClick={handleToggleDrawer}>
                                {isDrawerOpen ?
                                    <div className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                    :
                                    <div className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>

                                    </div>

                                }
                            </div>
                            {isDrawerOpen && (
                                <ul tabindex="0" class="menu menu-sm md:hidden absolute top-6 mt-3 z-[1] p-2 shadow bg-white  w-screen h-screen">
                                    {/* {items.map((menuItem, index) => (
                    <ListItem
                        key={index}
                        item={menuItem}
                        isOpen={openItem === menuItem.label}
                        onItemClick={handleItemClick}
                    />
                ))} */}

                                    <MobileMenu items={items}></MobileMenu>


                                </ul>
                            )}
                        </div>
                        <div class="btn btn-ghost ps-0 text-xl">
                            <Image
                                width={40}
                                height={40}
                                className=""
                                src="/Logo-Update-2.png"
                                alt=""
                            />
                        </div>
                        <div class="navbar-center hidden lg:flex">
                            <ul class="menu menu-horizontal p-0 m-0">

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

                    <div class="navbar-end">
                        <button class="btn btn-ghost pe-0 btn-circle">
                            <Image
                                width={20}
                                height={20}
                                src='/Index.png' />
                        </button>
                        <button class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <Image
                                    width={20}
                                    height={20}
                                    src='/User.png' />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span class="badge badge-xs badge-primary indicator-item"></span> */}
                            </div>
                        </button>
                    </div>

                </div>
                <SubManu items={items} openItem={openItem}></SubManu>

            </div>

        </header >
    )
}

export default Navber;