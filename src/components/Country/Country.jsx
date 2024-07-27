import './Country.css'

const Country = ({country}) => {
    console.log(country);
    const {name} =  country;
    return (
        <div className='style'>
            <h3>{name.common}</h3>
        </div>
    );
};

export default Country;