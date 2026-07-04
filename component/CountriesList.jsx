import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ search, selectRegion }) {

    let [countriesData, setCountriesData] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // this newly api is deprecated and login after new api key with use 
        // fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region")

        // new but not work some issue 
        // "https://api.restcountries.com/countries/v5?api-key=rc_live_9a227c953e3342e29e8fb0a253df69a3",

        // other url 
        // fetch("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")
        fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data[1]);
                setCountriesData(data);
                setLoading(false)

            })
            .catch((error) => {
                console.log(error);
            })

        // let setinterval_id = setInterval(() => {
        //     console.log("i am settimeout");
        // }, [100]);

        // return ()=>{
        //     clearInterval(setinterval_id)
        //     console.log("cleaning componnent");
        // }

    }, [])

    let filtercountires = countriesData.filter((country) => {

        const searchMatch = country.name.common
            .toLowerCase()
            .includes(search.toLowerCase())
        const filterregion =
            selectRegion === "" ? true : country.region == selectRegion

        return searchMatch && filterregion
    }
    );

    // console.log(filtercountires[0]);


    const data = filtercountires.map((data) => (

        <CountryCard
            key={data.name.common}
            card_title={data.name.common}
            card_img={`https://flagcdn.com/w320/${data.cca2.toLowerCase()}.png`}
            card_population={data.population}
            card_region={data.region}
            card_capital={data.capital}
            data={data}
            allCountries={countriesData}
        />

    ));
    // console.log(data[0]);
    return (
        <>
            <div className="countries_container">

                {
                    loading ? <CountriesListShimmer /> :

                        filtercountires.length > 0
                            ? data
                            : <h1>Not Found Data</h1>
                }

            </div>
        </>
    );
}