import Searchbar from "./Searchbar"
import Selectmenu from "./Selectmenu"
import CountriesList from "./CountriesList"
import { useState } from "react"
export default function Home() {
    const [search, setSearch] = useState('')
    const [selectRegion, setSelectRegion] = useState('')

    return (
        <>
            <div className="container">
                <div className="search_filter_container">
                    <Searchbar setSearch={setSearch} />
                    <Selectmenu setSelectRegion={setSelectRegion}/>
                </div>
                    <CountriesList search={search} selectRegion={selectRegion}/>
            </div>
        </>
    )
}
