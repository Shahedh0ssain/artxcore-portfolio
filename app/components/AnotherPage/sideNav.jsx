
'use client'



const Sidenav = ({ activeSection, onNavItemClick }) => {

   
    const handleItemClick = (sectionId) => {
        console.log('Clicked:', sectionId);
        onNavItemClick(sectionId);
    };
    return (
        <div className=" sticky top-14">
            {/* Your existing content */}
            <div>

                <ul>
                    {/* <li className={`sidenav-item ${activeSection === 'overview' ? 'active' : ''}`} onClick={() => handleItemClick('overview')}>
                        Overview
                    </li> */}
                    <li className={`sidenav-item ${activeSection === 'overview' ? 'active' : ''}`} onClick={() => handleItemClick('overview')}>Overview</li>
                    <li className={`sidenav-item ${activeSection === 'benefits' ? 'active' : ''}`} onClick={() => handleItemClick('benefits')}>Benefits</li>
                    <li className={`sidenav-item ${activeSection === 'awards' ? 'active' : ''}`} onClick={() => handleItemClick('awards')}>Awards</li>
                    <li className={`sidenav-item ${activeSection === 'banks' ? 'active' : ''}`} onClick={() => handleItemClick('banks')}>Banks</li>

                </ul>
            </div>


            {/* <ScrollSidebar /> */}
        </div>
    );
};

export default Sidenav;