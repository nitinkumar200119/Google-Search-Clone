import {useState ,useEffect } from 'react'
import API_KEY from "./keys"
import term from "./SearchPage";


const CONTEXT_KEY ="65c35d4519546ede6";
const useGoogleSearch=(term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=
                ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result =>{
                setData(result)
            })
        }
        fetchData();
        
    }, [term])
    return {data}
    
}

export default useGoogleSearch
