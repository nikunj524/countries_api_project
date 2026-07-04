import Header from "./component/Header"
import Searchbar from "./component/Searchbar"
import Selectmenu from "./component/Selectmenu"
import CountriesList from "./component/CountriesList"
import CountriesData from "./data.js"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Home from "./component/Home.jsx"

// console.log(CountriesData[0].name.common);
export default function App(){
    return (
        <>
            <Header/>  
            <Outlet/>
        </>
    )
}