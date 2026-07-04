import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import BackBtn from "./BackBtn";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import style from "../style/Countrydetails.module.css";

export default function CountryDetails() {
    const { country: country_name } = useParams();
    const { state } = useLocation();

    const [countryDetails, setCountryDetails] = useState({});
    const [allCountries, setAllCountries] = useState([]);
    const [borderCountries, setBorderCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    // Country Details
    useEffect(() => {
        setLoading(true);
        setNotFound(false);

        // Navigation from Home Page
        if (state?.country && state?.allCountries) {
            setCountryDetails(state.country);
            setAllCountries(state.allCountries);
            setLoading(false);
            return;
        }

        // Direct URL / Refresh
        Promise.all([
            fetch(
                `https://studies.cs.helsinki.fi/restcountries/api/name/${country_name}`
            ).then((res) => {
                if (!res.ok) {
                    throw new Error("Country Not Found");
                }
                return res.json();
            }),

            fetch(
                "https://studies.cs.helsinki.fi/restcountries/api/all"
            ).then((res) => res.json()),
        ])
            .then(([countryData, countriesData]) => {
                setCountryDetails(countryData);
                setAllCountries(countriesData);
                setLoading(false);
            })
            .catch(() => {
                setNotFound(true);
                setLoading(false);
            });
    }, [country_name, state]);

    // Border Countries
    useEffect(() => {
        if (
            !countryDetails?.borders?.length ||
            allCountries.length === 0
        ) {
            setBorderCountries([]);
            return;
        }

        const matchedBorders = allCountries.filter((country) =>
            countryDetails.borders.includes(country.cca3)
        );

        setBorderCountries(matchedBorders);
    }, [countryDetails, allCountries]);

    if (notFound) {
        return <h1>Country Not Found</h1>;
    }

    return (
        <div className={style.country_details_container}>
            <BackBtn />

            {loading ? (
                <CountryDetailsShimmer />
            ) : (
                <div className={style.country_details_card}>
                    <div className={style.country_details_left}>
                        <img
                            src={`https://flagcdn.com/w320/${countryDetails?.cca2?.toLowerCase()}.png`}
                            alt="flag"
                        />
                    </div>

                    <div className={style.country_details_right}>
                        <h3 className={style.country_name}>
                            {countryDetails?.name?.common}
                        </h3>

                        <div className={style.details}>
                            <div className={style.details_left}>
                                <p>
                                    <b>Native Name: </b>
                                    {
                                        Object.values(
                                            countryDetails?.name?.nativeName ||
                                            countryDetails?.name?.native ||
                                            {}
                                        )[0]?.common || "-"
                                    }
                                </p>

                                <p>
                                    <b>Population: </b>
                                    {
                                        countryDetails?.population
                                            ?.toLocaleString("en-IN") || "-"
                                    }
                                </p>

                                <p>
                                    <b>Region: </b>
                                    {countryDetails?.region || "-"}
                                </p>

                                <p>
                                    <b>Sub Region: </b>
                                    {countryDetails?.subregion || "-"}
                                </p>

                                <p>
                                    <b>Capital: </b>
                                    {countryDetails?.capital?.[0] || "-"}
                                </p>
                            </div>

                            <div className={style.details_right}>
                                <p>
                                    <b>Top Level Domain: </b>
                                    {countryDetails?.tld?.[0] || "-"}
                                </p>

                                <p>
                                    <b>Currencies: </b>
                                    {
                                        Object.values(
                                            countryDetails?.currencies || {}
                                        )[0]?.symbol || "-"
                                    }
                                </p>

                                <p>
                                    <b>Languages: </b>
                                    {
                                        Object.values(
                                            countryDetails?.languages || {}
                                        ).join(", ") || "-"
                                    }
                                </p>
                            </div>
                        </div>

                        <div className={style.details_border_country}>
                            <p>
                                <b>Border Countries: </b>
                            </p>

                            <div className={style.border_country_btn}>
                                {borderCountries.length > 0 ? (
                                    borderCountries.map((country) => (
                                        <Link
                                            key={country.name.common}
                                            to={`/${country.name.common}`}
                                            state={{
                                                country,
                                                allCountries,
                                            }}
                                        >
                                            {country.name.common}
                                        </Link>
                                    ))
                                ) : (
                                    <span>-</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}