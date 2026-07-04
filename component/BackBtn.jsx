import { useNavigate } from "react-router-dom"

export default function BackBtn() {
    const navigate = useNavigate();
    return (

        <div onClick={()=> navigate(-1)} className="back_btn">
            <span>
                <i className="fi fi-rr-arrow-small-left"></i>
                BACK
            </span>
        </div>
    )
}