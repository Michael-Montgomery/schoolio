import React, { createContext, useState } from 'react';

// Create the context
export const CityContext = createContext();

// Create the provider
export const CityProvider = ({ children }) => {
    const [citiesToCompare, setCitiesToCompare] = useState([]);

    // Function to add a city to the array
    const addCity = (city) => {
        if (citiesToCompare.length < 2 && !citiesToCompare.includes(city)) {
            setCitiesToCompare([...citiesToCompare, city]);
        }
    };

    // Function to remove a city from the array
    const removeCity = (city) => {
        setCitiesToCompare(citiesToCompare.filter((c) => c !== city));
    };

    return (
        <CityContext.Provider value={{ citiesToCompare, addCity, removeCity }}>
            {children}
        </CityContext.Provider>
    );
};