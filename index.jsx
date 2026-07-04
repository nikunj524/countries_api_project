import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./style/style.css"
const root = createRoot(document.querySelector("#root"))
import "@flaticon/flaticon-uicons/css/all/all.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Error from "./component/Error"
import CountryDetails from "./component/CountryDetails"
import CountriesListShimmer from "./component/CountriesListShimmer"
import CountryDetailsShimmer from "./component/CountryDetailsShimmer"
// root.render(<CountryPage/>)


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/:country",
                element: <CountryDetails/>
            },
            {
                path: "/shimmereffect",
                element: <CountryDetailsShimmer/>
            },
        ]
    },
]);

// root.render(<App/>)
root.render(<RouterProvider router={router} />,)