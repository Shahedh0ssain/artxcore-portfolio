

// import React, { useState } from 'react';

// const MobileMenu = ({ items }) => {
//     const [activeItem, setActiveItem] = useState(null);

//     const handleItemClick = (item) => {

//         console.log("Clicked Item:", item);
//         console.log("Active Item:", activeItem);

//         setActiveItem(item);

//     };

//     // const handleItemClick = (item) => {
//     //     setActiveItem(item);
//     //     console.log("active item", item)
//     // };

//     // const handleBackClick = () => {
//     //     setActiveItem((prevItem) => {
//     //         if (prevItem && prevItem.parent) {
//     //             return prevItem.parent;
//     //         }
//     //         return null;
//     //     });
//     // };


//     const handleBackClick = () => {
//         setActiveItem((prevItem) => (prevItem ? prevItem.parent || null : null));
//     };


//     // const renderSubMenu = (submenu, parent = null) => (

//     //     < ul>
//     //         {submenu?.map((subItem, index) => (
//     //             <li
//     //                 className='my-1 p-2   flex flex-row justify-between items-center border hover:bg-gray-200 '
//     //                 key={index} onClick={() => handleItemClick(subItem)}>
//     //                 {subItem.label}
//     //                 {subItem.anothersubmenu && (
//     //                     <div className="submenu-indicator">➔</div>
//     //                 )}
//     //                 {subItem.anothersubmenu && subItem.anothersubmenu.length > 0 && (
//     //                     renderAnotherSubMenu(subItem.anothersubmenu, subItem)
//     //                 )}
//     //                 {/* activeItem && activeItem.label === subItem.label && */}
//     //                 {/* {subItem.anothersubmenu && activeItem === subItem && subItem.anothersubmenu.length > 0 && (
//     //                     renderSubMenu(subItem.anothersubmenu, subItem)
//     //                 )} */}
//     //             </li>
//     //         ))}
//     //     </ul >
//     // );


//     const renderSubMenu = (submenu, parent = null) => (
//         <ul>
//             {submenu?.map((subItem, index) => (
//                 <li
//                     className='my-1 p-2   flex flex-row justify-between items-center border hover:bg-gray-200 '
//                     key={index}
//                     onClick={() => handleItemClick(subItem)}>
//                     {subItem.label}
//                     {subItem.anothersubmenu && (
//                         <div className="submenu-indicator">➔</div>
//                     )}
//                     {subItem.anothersubmenu && subItem.anothersubmenu.length > 0 && (
//                         renderAnotherSubMenu(subItem.anothersubmenu, subItem)
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );


//     // const renderAnotherSubMenu = (submenu, parent = null) => (

//     //     // console.log(submenu)
//     //     < ul >
//     //         {
//     //             submenu.map((subItem, index) => (
//     //                 <li
//     //                     className='flex flex-row justify-between hover:bg-gray-200 '
//     //                     key={index} onClick={() => handleItemClick(subItem)}>
//     //                     {subItem.label}
//     //                     {/* {subItem?.anothersubmenu && (
//     //                         <div className="submenu-indicator">➔</div>
//     //                     )}
//     //                     {subItem.anothersubmenu && activeItem === subItem && renderSubMenu(subItem.anothersubmenu, subItem)} */}
//     //                 </li>
//     //             ))
//     //         }
//     //     </ul >
//     // );


//     const renderAnotherSubMenu = (submenu, parent = null) => (
//         <ul>
//             <li className="back-button" onClick={handleBackClick}>
//                 Back
//             </li>
//             {submenu.map((subItem, index) => (
//                 <li
//                     className='submenu-item flex flex-row justify-between hover:bg-gray-200 '
//                     key={index} onClick={() => handleItemClick(subItem)}>
//                     {subItem.label}
//                     {subItem.anothersubmenu && (
//                         <div className="submenu-indicator">➔</div>
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );




//     return (
//         <div className="mobile-menu">
//             {activeItem ? (
//                 <div className="">
//                     <div className="p-2 border back-button flex flex-row justify-between" onClick={handleBackClick}>

//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
//                             </svg>

//                         </div>
//                         <p>Back</p>
//                     </div>
//                     {renderSubMenu(activeItem.submenu, activeItem)}
//                 </div>
//             ) : (
//                 <div className="main-list">
//                     <ul>
//                         {items.map((item, index) => (
//                             <li
//                                 className='p-2 my-1 border flex flex-row justify-between'
//                                 key={index} onClick={() => handleItemClick(item)}>
//                                 {item.label}
//                                 {item.submenu && (
//                                     <div className="submenu-indicator ">
//                                         <div className=''>
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
//                                                 <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MobileMenu;

import React, { useState } from 'react';

const MobileMenu = ({ items }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleItemClick = (item) => {
    console.log("Clicked Item:", item);

    if (item.submenu) {
      // If the clicked item has a submenu, show its items
      setActiveSubMenu(item.submenu);
    } else if (item.anothersubmenu) {
      // If the clicked item has another submenu, show its items
      setActiveSubMenu(item.anothersubmenu);
    } else {
      // If it's a leaf item, you can perform your logic here
      console.log("Leaf Item Clicked:", item);
    }
  };

  const handleBackClick = () => {
    setActiveSubMenu(null);
  };

  const renderSubMenuItems = (submenu) => (
    <div>
      <div className="p-2 border back-button flex flex-row justify-between" onClick={handleBackClick}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </div>
        <p>Back</p>
      </div>
      <ul>
        {submenu.map((subItem, index) => (
          <li
            className='submenu-item p-2 border my-1 flex flex-row justify-between  hover:bg-gray-200 '
            key={index}
            onClick={() => handleItemClick(subItem)}>
            {subItem.label}
            {subItem.anothersubmenu && (
              <div className="submenu-indicator">➔</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mobile-menu">
      {activeSubMenu ? (
        renderSubMenuItems(activeSubMenu)
      ) : (
        <div className="main-list">
          <ul>
            {items.map((item, index) => (
              <li
                className='p-2 my-1 border flex flex-row justify-between'
                key={index} onClick={() => handleItemClick(item)}>
                {item.label}
                {item.submenu && (
                  <div className="submenu-indicator ">
                    <div className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;


