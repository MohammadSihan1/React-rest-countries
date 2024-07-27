import './Country.css'

const Country = ({country}) => {
    console.log(country);
    const {name, flags} =  country;
    return (
        <div className='style'>
            <h3>{name.common}</h3>
            <img src={flags.svg} width={'200px'} alt="" />
        </div>
    );
};

export default Country;