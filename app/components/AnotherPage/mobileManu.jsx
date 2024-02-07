
'use client'



const MobileManu = ({ activeSection, onNavItemClick }) => {

    console.log(activeSection)
    const handleItemClick = (sectionId) => {
        console.log('Clicked:', sectionId);
        onNavItemClick(sectionId);
    };
    return (



        <div className=" md:hidden lg:hidden sticky top-12 ">


            <ul className=" flex py-1 bg-white">
                <li className={`sidenav-item border-b-4 ${activeSection === 'overview' ? 'border-b-4 border-blue-700 py-1' : ''}`} onClick={() => handleItemClick('overview')}>Overview</li>
                <li className={`sidenav-item border-b-4 ${activeSection === 'benefits' ? 'border-b-4 border-blue-700' : ''}`} onClick={() => handleItemClick('benefits')}>Benefits</li>
                <li className={`sidenav-item border-b-4 ${activeSection === 'awards' ? 'border-b-4 border-blue-700' : ''}`} onClick={() => handleItemClick('awards')}>Awards</li>
                <li className={`sidenav-item border-b-4 ${activeSection === 'banks' ? 'border-b-4 border-blue-700' : ''}`} onClick={() => handleItemClick('banks')}>Banks</li>
            </ul>

        </div>

    );
};

export default MobileManu;