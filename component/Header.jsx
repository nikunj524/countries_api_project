import { useEffect, useState } from "react"
import light_mode from "../assets/images/light_mode.png"
import dark_mode from "../assets/images/dark_mode.png"

export default function Header() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme_data") || "light"
    })
    useEffect(() => {
        document.body.className = theme
        localStorage.setItem("theme_data", theme)
    }, [theme])
    return (
        <>
            <div className="header_container">
                <div className="header_content">
                    <a href="#"  >Where in the World ?</a>
                    <div className="theme_chanage">
                        <button
                            onClick={() => {
                                setTheme(
                                    theme === "light" ? "dark" : "light"
                                )
                            }}
                        >
                            {
                                theme === "light" ?
                                    <>
                                        <img src={dark_mode} alt="img not found" className="theme_mode"></img> Dark mode
                                    </>
                                    :
                                    <>
                                        <img src={light_mode} alt="img not found" className="theme_mode"></img> Light mode
                                    </>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}