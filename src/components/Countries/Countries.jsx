import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (country) => {
        console.log(country);
        console.log('Add this to your visited countries');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Total Countries: {countries.length}</h2>
                <h2>Available Countries: {countries.length}</h2>
            </div>
            <div>
                <h2>Visited Countries:{visitedCountries.length}</h2>
                <div>
                    <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', border: '3px dotted brown', borderRadius: '15px', marginBottom: '10px', padding:'20px', fontWeight:'bolder ', fontSize:'20px'  }}>
                        {
                            visitedCountries.map(country => <li
                                key={country.cca3}
                            >
                                {country.name.common}</li>)
                        }
                    </ol>
                </div>
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;