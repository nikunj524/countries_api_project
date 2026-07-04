import React from 'react'
import style from "../style/CountrydetailsShimmer.module.css"

export default function CountryDetailsShimmer() {
    return (
        <>
            <div className={style.country_details_card}>
                <div className={style.country_details_left}>
                    <img />
                </div>
                <div className={style.country_details_right}>
                    <h3 className={style.country_name}></h3>
                    <div className={style.details}>
                        <div className={style.details_left}>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className={style.details_right}>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className={style.details_border_country}>
                        <p></p>
                        <div className={style.border_country_btn}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
