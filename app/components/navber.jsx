'use client'


import Image from "next/image";
import { useEffect, useState } from "react";
import ListItem from "./listItems";
import items from './../lib/items'
import MobileMenu from "./mobileManu";
import SubManu from "./subManu";


const Navber = () => {

    const [openItem, setOpenItem] = useState(null);
    const [selectedSubmenu, setSelectedSubmenu] = useState(null);

    useEffect(() => {
        if (openItem) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup the class on component unmount
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [openItem]);

    const handleItemClick = (item) => {
        setOpenItem((prevOpenItem) => (prevOpenItem === item ? null : item));
        setSelectedSubmenu(null);
    };


    // relative ${openItem ? 'overlay' : ''}
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };


    return (
        <header className={`sticky top-0    border-b z-50  ${openItem ? 'overlay' : ''} `}>
            <div className={`navbar p-0  min-h-3 bg-white`}>


                <div class="navbar-start">
                    <div class="dropdown">
                        {/* <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div> */}
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
                    <div class="btn btn-ghost text-xl">
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
                    <button class="btn btn-ghost btn-circle">
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


                <SubManu items={items} openItem={openItem}></SubManu>


                {/* {
                    openItem &&
                    <div className={` w-screen h-[400px]  absolute top-14 bg-white`}>
                        <div className=" w-1/4 h-full border ">
                            <ul className="menu ps-5 pt-5 pb-5 ">

                                {items.find((menuItem) => menuItem.label === openItem)?.submenu?.map((submenuItem, index) => (
                                    <li
                                        onClick={() => handleSubItemClick(submenuItem.anothersubmenu)}
                                        className="my-1  text-black  hover:bg-[#EBEBEB]" key={index}>
                                        <a>{submenuItem.label}</a>


                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="h-full w-3/4 ">
                            {selectedSubmenu && (
                                <div className="h-full w-full p-5">
                                    <p>{selectedSubmenu.label}</p>
                                    <ul className="menu">
                                        {selectedSubmenu?.map((item, index) => (
                                            <li className="text-black my-1" key={index}>
                                                <a>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>


                } */}
            </div>
        </header >
    )
}

export default Navber;