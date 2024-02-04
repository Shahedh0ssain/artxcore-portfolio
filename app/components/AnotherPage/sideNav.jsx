
'use client'



const Sidenav = ({ activeSection, onNavItemClick }) => {


    const handleItemClick = (sectionId) => {
        console.log('Clicked:', sectionId);
        onNavItemClick(sectionId);
    };
    return (
        <div className="hidden md:block sticky top-28">

            <div>
                <ul className="">
                    <li className={`sidenav-item border-l-4 ${activeSection === 'overview' ? 'border-l-4 border-blue-700 py-1' : ''}`} onClick={() => handleItemClick('overview')}>Overview</li>
                    <li className={`sidenav-item border-l-4 ${activeSection === 'benefits' ? 'border-l-4 border-blue-700' : ''}`} onClick={() => handleItemClick('benefits')}>Benefits</li>
                    <li className={`sidenav-item border-l-4 ${activeSection === 'awards' ? 'border-l-4 border-blue-700' : ''}`} onClick={() => handleItemClick('awards')}>Awards</li>
                    <li className={`sidenav-item border-l-4 ${activeSection === 'banks' ? 'border-l-4 border-blue-700' : ''}`} onClick={() => handleItemClick('banks')}>Banks</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidenav;