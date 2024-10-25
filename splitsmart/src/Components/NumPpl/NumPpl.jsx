import React, { useState } from 'react';
import './NumPpl.css';
import People from './People';

const NumPpl = () => {
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [peopleNames, setPeopleNames] = useState(Array(numberOfPeople).fill("")); 

    const handleChange = (event) => {
        const newCount = parseInt(event.target.value);
        setNumberOfPeople(newCount);
        setPeopleNames(Array(newCount).fill("")); 
        setIsOpen(false);
    };

    const handleNameChange = (index, name) => {
        const updatedNames = [...peopleNames];
        updatedNames[index] = name;
        setPeopleNames(updatedNames);
    };

    return (
        <div className="dropdown">
            <h1>Number of people:</h1>
            <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
                {numberOfPeople} {numberOfPeople === 1 ? 'person' : 'people'}
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
            <People numberOfPeople={numberOfPeople} peopleNames={peopleNames} onNameChange={handleNameChange} />
        </div>
    );
};

export default NumPpl;
