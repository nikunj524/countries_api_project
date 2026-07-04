import { useState } from "react"

export default function Selectmenu({setSelectRegion,selectRegion}) {
    
    return (
        <>
            <div className="selectmenu">
                <select className="filter_by_region" 
                    onChange={(e)=>{
                        setSelectRegion(e.target.value)
                    }}
                >
                    <option hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

            </div>
        </>
    )
}