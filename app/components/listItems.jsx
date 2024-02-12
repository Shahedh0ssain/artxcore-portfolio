
import React from 'react';

const ListItem = ({ item, isOpen, onItemClick }) => {

  return (
    <li className={`flex flex-row justify-between text-base font-normal text-[#525252]  items-center p-1 ${isOpen ? 'bg-gray-200 border-2 border-indigo-600' : ''}`} onClick={() => {
      onItemClick(item.label)
      // handleSubItemClick(item.submenu)
    }}>
      <a className="p-1 m-0">{item.label}</a>
      {
        isOpen ?
          <div className='p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
          :
          <div className='p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </div>

      }

    </li>
  );
};

export default ListItem;

