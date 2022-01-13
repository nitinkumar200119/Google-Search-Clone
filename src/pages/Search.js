import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
// import SelectInput from '@material-ui/core/Select/SelectInput';


function Search({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log("you hit the search", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("/search")

    };
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="Search__inputIcon " />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type="submit" onClick={search} varient="outlined">Google Search</Button>
                    <Button varient="outlined"> I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button className="search_buttonsHidden" type="submit" onClick={search} varient="outlined">Google Search</Button>
                    <Button className="search_buttonsHidden" varient="outlined"> I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    )
}

export default Search
