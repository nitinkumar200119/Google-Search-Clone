import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';
import Search from './Search';
function Home() {
    return (
        <div className="home">
            
            <div className="home__header">
                <div className="home__headerLeft">
                   <Link to="/about">About</Link> 
                    {/* Link */}
                    <Link to="/store">Store</Link> 
                    {/* Link  */}
                </div>
                <div className="home__headerRight">
                    {/* Link */}
                    <Link to="/gmail">Gmail</Link> 
                    {/* Link  */}
                    <Link to="/images">Images</Link> 
                    {/* icon  */}
                    <AppIcon />
                    {/* avtar  */}
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" 
                alt="">
                </img>
                {/* input search */}
                <Search  />
            </div>

            
        </div>
    )
}

export default Home
