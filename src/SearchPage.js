import React from 'react'
import "./SearchPage.css"
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"



function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
        <div className="searchpage">
            <div className="searchpage__header">
                <Link to="/">
                    <img
                        className="searchpage__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                        alt="">
                    </img>
                </Link>
                {/* https://developers.google.com/custom-search/v1/using_rest */}

                <div className="searchpage__headerBody">
                    <Search hideButtons />
                    <div className="searchpage__option">
                        <div className="searchpage__optionsLeft">
                            <div className="searchpage__options">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchpage__options">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>

                            <div className="searchpage__options">
                                <ImageIcon />
                                <Link to="/imaged">Images</Link>
                            </div>

                            <div className="searchpage__options">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>

                            <div className="searchpage__options">
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div>

                            <div className="searchpage__options">
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>

                        <div className="searchpage__optionsRight">
                            <div className="searchpage__options">
                                <Link to="/settings">Settings</Link>
                            </div>

                            <div className="searchpage__options">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchpage__results">
                    <p className="searchpage__resultCount">About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>

                    {data?.items.map(item => (
                        <div className="searchpage__result">
                            <a className="searchpage__resultLink" href={item.link}>
                                {item.pagemap?.cse_image?.length>0 &&(
                                    <img className="searchpage__resultImage"
                                    src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src}
                                    alt=""></img>
                                )}


                                {item.displayLink}
                            </a>

                            <a  className="searchpage__resultTitle" href={item.link}><h2>{item.title}</h2>
                            </a>

                            <p className="searchpage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
