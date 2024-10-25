import React from 'react';
import './NumPpl.css';

const People = ({ numberOfPeople, peopleNames, onNameChange }) => {
    return (
        <div className="people-container">
            {Array.from({ length: numberOfPeople }, (_, index) => (
                <div key={index} className="people-input">
                    <label>Person {index + 1}:</label>
                    <input
                        type="text"
                        value={peopleNames[index]}
                        onChange={(e) => onNameChange(index, e.target.value)}
                        placeholder={`Enter name of person ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default People;
