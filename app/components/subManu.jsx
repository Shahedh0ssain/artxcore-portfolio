

import React, { useState, useEffect } from 'react';

const SubManu = ({ items, openItem }) => {
    const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);
    const [submenuData, setSubmenuData] = useState([]); // New state to hold submenu data

    useEffect(() => {
        // Set the first submenu item as active and initialize data when openItem becomes true
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
                <div className={`w-screen h-[400px] absolute top-12 bg-white drop-shadow-md`}>
                    <div className="w-1/4 h-full border-e">
                        <ul className="menu ps-5 pt-5 pb-5">
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
                    <div className="h-full w-3/4">
                        {/* Display selected anothersubmenu */}
                        {activeSubmenuItem && (
                            <div className="h-full w-full p-5">
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
            )}
        </>
    );
};

export default SubManu;


