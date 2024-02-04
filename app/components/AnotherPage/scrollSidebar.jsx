'use client'


import React, { useEffect, useState } from 'react';

const ScrollSidebar = () => {
    const [activeStep, setActiveStep] = useState(null);

    useEffect(() => {
        // Function to update active step based on scroll position
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Determine the active step based on scroll position
            const activeStepIndex = Array.from(document.querySelectorAll('.step')).findIndex(
                (step) => {
                    const stepTop = step.offsetTop;
                    const stepBottom = stepTop + step.offsetHeight;
                    return scrollPosition >= stepTop && scrollPosition < stepBottom;
                }
            );

            // Update the active step in the state
            setActiveStep(activeStepIndex);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <ul className="steps steps-vertical">
            {Array.from(document.querySelectorAll('.step')).map((step, index) => (
                <li
                    key={index}
                    className={`step ${index === activeStep ? 'step-primary' : ''}`}
                >
                    {step.innerText}
                </li>
            ))}
        </ul>
    );
};

export default ScrollSidebar;


