
'use client'



const Sidenav = ({ activeSection, onNavItemClick }) => {

    console.log("sidevar section", activeSection)

    const handleItemClick = (sectionId) => {
        console.log('Clicked:', sectionId);
        onNavItemClick(sectionId);
    };
    return (

        <div className="hidden md:block sticky top-28">


            <ul className="">
                <li className={`sidenav-item border-l-4 ${activeSection === 'overview' ? 'border-l-4 border-blue-700 py-1' : ''}`} onClick={() => handleItemClick('overview')}>Overview</li>
                <li className={`sidenav-item border-l-4 ${activeSection === 'benefits' ? 'border-l-4 border-blue-700' : ''}`} onClick={() => handleItemClick('benefits')}>Benefits</li>
                <li className={`sidenav-item border-l-4 ${activeSection === 'awards' ? 'border-l-4 border-blue-700' : ''}`} onClick={() => handleItemClick('awards')}>Awards</li>
                <li className={`sidenav-item border-l-4 ${activeSection === 'banks' ? 'border-l-4 border-blue-700' : ''}`} onClick={() => handleItemClick('banks')}>Banks</li>
                <li className={`sidenav-item border-l-4 ${activeSection === 'reviews' ? 'border-l-4 border-blue-700' : ''}`} onClick={() => handleItemClick('banks')}>Reviews</li>
            </ul>

        </div>

        // <div className=" md:hidden lg:hidden sticky top-12 ">

        //     <div>
        //         <ul className="flex border py-1">
        //             <li className={`sidenav-item border-b-4 ${activeSection === 'overview' ? 'border-b-4 border-blue-700 py-1' : ''}`} onClick={() => handleItemClick('overview')}>Overview</li>
        //             <li className={`sidenav-item border-b-4 ${activeSection === 'benefits' ? 'border-b-4 border-blue-700' : ''}`} onClick={() => handleItemClick('benefits')}>Benefits</li>
        //             <li className={`sidenav-item border-b-4 ${activeSection === 'awards' ? 'border-b-4 border-blue-700' : ''}`} onClick={() => handleItemClick('awards')}>Awards</li>
        //             <li className={`sidenav-item border-b-4 ${activeSection === 'banks' ? 'border-b-4 border-blue-700' : ''}`} onClick={() => handleItemClick('banks')}>Banks</li>
        //         </ul>
        //     </div>
        // </div>

    );
};

export default Sidenav;