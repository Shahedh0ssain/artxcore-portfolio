'use client'

import Hero from "../components/hero";
import OverView from "../components/AnotherPage/overView";
import Benefits from "../components/AnotherPage/benefits";
import Awards from "../components/AnotherPage/awards";
import Banks from "../components/AnotherPage/banks";
import Sidenav from "../components/AnotherPage/sideNav";
import { useEffect, useState } from "react";


const anotherPage = () => {

    const [activeSection, setActiveSection] = useState('overview');

    const handleNavItemClick = (sectionId) => {
        console.log('Active Section:', sectionId);
        setActiveSection(sectionId);
        // Scroll to the clicked section if needed
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    useEffect(() => {
        const sectionTargets = document.querySelectorAll('.section'); // Replace with the actual class of your sections
        const options = {
            rootMargin: '0px',
            threshold: 0.5, // Adjust as needed
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        sectionTargets.forEach((target) => {
            observer.observe(target);
        });

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <>
            {/* <Navber></Navber> */}
            <section className="max-w-screen-2xl  mx-auto px-2  md:px-10 lg:px-10  ">

                <Hero></Hero>
                <div className="relativesss relative">
                    <div className="md:flex">
                        <div className="md:w-2/12 md:mt-20">
                            <Sidenav activeSection={activeSection} onNavItemClick={handleNavItemClick} />
                        </div>
                        <div className="md:w-10/12">
                            <div id="overview" className="section"><OverView /></div>
                            <div id="benefits" className="section"><Benefits /></div>
                            <div id="awards" className="section"><Awards /></div>
                            <div id="banks" className="section"><Banks /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )


}

export default anotherPage