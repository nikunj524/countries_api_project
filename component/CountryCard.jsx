import { Link } from "react-router-dom";

export default function CountryCard({
  card_title,
  card_img,
  card_population,
  card_region,
  card_capital,
  data,
  allCountries,
}) {
  return (
    <Link
      to={`/${card_title}`}
      state={{
        country: data,
        allCountries,
      }}
    >
      <div className="country_card">
        <img src={card_img} alt="image not found" />

        <div className="country_text">
          <h3 className="card_title">{card_title}</h3>

          <p>
            <b>Population: </b>
            {card_population?.toLocaleString("en-IN") || "-"}
          </p>

          <p>
            <b>Region: </b>
            {card_region || "-"}
          </p>

          <p>
            <b>Capital: </b>
            {card_capital?.[0] || "-"}
          </p>
        </div>
      </div>
    </Link>
  );
}