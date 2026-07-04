import { useParams } from "react-router-dom"

export default function Contact() {
    const url = useParams()
    console.log(url);
    return (
        <>
            <h1>Contact page</h1>
        </>
    )
}