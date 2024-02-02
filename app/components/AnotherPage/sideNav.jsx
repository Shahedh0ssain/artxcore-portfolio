const Sidenav = () => {
    // Your existing component logic

    return (
        <div>
            {/* Your existing content */}
            <div>
                <ul className="steps steps-vertical">
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose plan</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
                </ul>
            </div>

            {/* ScrollSpySidebar */}
            <ScrollSpySidebar />
        </div>
    );
};

export default Sidenav;