import React,{useState} from "react";

const SearchForm = ({onSearch})=>{

    const [query,setQuery] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        onSearch(query)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                    placeholder="Search here..."
                    onChange={(e)=>setQuery(e.target.value)}
                    value={query}
            ></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm