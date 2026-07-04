import { Link } from "react-router-dom";
import BackBtn from "./BackBtn";
import CountryDetails from "./CountryDetails";

export default function CountryPage() {
    return (
        <>
            <div className="country_details_container">
                {/* <Link to=""> */}
                {/* </Link> */}
                    <BackBtn />
                <CountryDetails />
            </div>
        </>
    )
}