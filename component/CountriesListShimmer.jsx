import React from 'react'
import style from "../style/CountriesListShimmer.module.css"
export default function CountriesListShimmer() {
    return (
        <>
            {
                Array.from({ length: 10 }).map((_, index) => (

                    <div className={style.country_card} key={index}>
                        <img />
                        <div className={style.country_text}>
                            <h3 className={style.card_title}></h3>
                            <p><b></b></p>
                            <p><b></b></p>
                            <p><b></b></p>
                        </div>
                    </div>

                ))
            }
        </>
    )
}
