import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    console.log(props);
    return (
        <div className="country">
            <h4>Country: {name}</h4>
            <img className = "flagStyle" src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            {/* If want to add parameter to the onClick handler must declare empty arrow function. */}
            <button onClick= {() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;