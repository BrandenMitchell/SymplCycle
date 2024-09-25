import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import DeblurIcon from '@mui/icons-material/Deblur';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {Link} from "react-router-dom"
export default function Sidebar() {
    return(
        <div className="sideBar">
            <span className="collapse"><DeblurIcon/></span>
            {/* <span className="collapse"><DarkModeRoundedIcon/></span> */}
            <h2 className="name">
                <span id="1">Sympl</span><span id="cycle">Cycle</span>
                
            </h2>
            <ul className="nav">
                <li>
                    <Link to="/Home">
                        <HomeRoundedIcon />
                        <span>Home</span>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/Journal">
                        <AutoStoriesIcon />
                        <span>Journal</span>
                    
                    </Link>
                </li>
                <li>
                    <Link to="/Calendar">
                        
                        <CalendarMonthIcon/>
                        <span>Calendar</span>
                    
                    </Link>
                    
                </li>
            </ul>
            <div className="Factbox">
                <h1>Did you Know?</h1>
                <div className="fact">
                    "While on your period your testosterone rises"

                </div>
            </div>
        </div>
    )
        
    
}