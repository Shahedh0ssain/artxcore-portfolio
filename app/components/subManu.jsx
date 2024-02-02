

import React, { useState, useEffect } from 'react';

const SubManu = ({ items, openItem }) => {

    const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);
    const [submenuData, setSubmenuData] = useState([]); // New state to hold submenu data

    useEffect(() => {
        if (openItem) {
            const firstSubmenuItem = items.find((menuItem) => menuItem.label === openItem)?.submenu?.[0];
            setActiveSubmenuItem(firstSubmenuItem);
            setSubmenuData(firstSubmenuItem?.anothersubmenu || []);
        }
    }, [openItem, items]);



    const handleSubItemClick = (submenu) => {
        setActiveSubmenuItem(submenu);
        // Update data based on the clicked submenu
        setSubmenuData(submenu?.anothersubmenu || []);
        // Add any additional logic you need when a submenu item is clicked
    };


    return (
        <>
            {openItem && (
                <div className='w-full  md:h-[400px] lg:h-[400px]  bg-white drop-shadow-md'>
                    <div className={` max-w-screen-2xl mx-auto h-full   flex absolute top-0 left-0 right-0 `}>
                        <div className="w-1/4 h-full  border-e">
                            <ul className=" menu ps-5  pb-5 ">
                                {items.find((menuItem) => menuItem.label === openItem)?.submenu?.map((submenuItem, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSubItemClick(submenuItem)}
                                        className={`my-1 text-black hover:bg-[#EBEBEB]  ${activeSubmenuItem === submenuItem ? 'bg-gray-200 border-2 border-indigo-600' : ''}`}>
                                        <a>{submenuItem.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=" w-3/4 h-full">
                            {/* Display selected anothersubmenu */}
                            {activeSubmenuItem && (
                                <div className="p-5">
                                    <p>{activeSubmenuItem.label}</p>
                                    {/* Map through the selected submenu items */}
                                    <ul className="menu">
                                        {submenuData.map((item, index) => (
                                            <li className={`text-black my-1 ${activeSubmenuItem === item ? 'active' : ''}`} key={index}>
                                                <a>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SubManu;


