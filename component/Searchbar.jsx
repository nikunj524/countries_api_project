import search_img from "../assets/images/searchbar.png"
// import filedata from "../data"
export default function Searchbar({setSearch}){
    return(
        <>
            <div className="searchbar">
                {/* <span><img src={search_img} alt="image not found" width={500}/></span> */}
                <span><i className="fi fi-rr-search"></i></span>
                <input onChange={(e)=> setSearch(e.target.value.toLowerCase())}  type="text" name="searchbar" id="" placeholder="Search for a Country.."/> 
            </div>
        </>
    )
}