import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {
    console.log(country);
    console.log(handleVisitedCountries);
    const { name, flags, population, region, subregion, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`style ${visited ? 'visited' : 'style'}`}>
            <h3 style={{ color: visited ? 'purple' : 'black' }}>{name.common}</h3>
            <h4><small>Code: {cca3}</small></h4>
            <img src={flags.svg} width={'200px'} alt="" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Region: {region}</h3>
                <h3>SubRegion: {subregion}</h3>
            </div>
            <h4>Population: {population}</h4>
            <hr />
            <button onClick={() => { handleVisitedCountries(country) }}>Mark as Visited</button>
            <hr />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visiting'}</button>
        </div>
    );
};

export default Country;