import React, { useState } from 'react';
import './NumPpl.css';

const NumPpl = () => {
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const[isOpen, setIsOpen] = useState(false);

    // evaluates number of people selected 
    const handleChange = (event) => {
        setNumberOfPeople(event.target.value);
        setIsOpen(false);
    };

    return (
        <div class="dropdown">
            <h1>Number of people:</h1>
            <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
                {numberOfPeople} {numberOfPeople === 1? 'person':'people'}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {[...Array(10).keys()].map((num) => (
                        <li key={num + 1} className="dropdown-item" onClick={handleChange} value={num + 1}>
                            {num + 1}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NumPpl;