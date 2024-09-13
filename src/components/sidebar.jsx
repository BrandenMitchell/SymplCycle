import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Sidebar() {
    return(
        <nav className="sideBar">
            <h2>
                SymplCycle
            </h2>
            <ul>
                <li>
                    <a href="#">
                        <HomeRoundedIcon />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <AutoStoriesIcon />
                        <span>Journal</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
        
    
}