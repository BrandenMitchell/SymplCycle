import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import DeblurIcon from '@mui/icons-material/Deblur';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function Sidebar() {
    return(
        <nav className="sideBar">
            <span className="collapse"><DeblurIcon/></span>
            {/* <span className="collapse"><DarkModeRoundedIcon/></span> */}
            <h2 className="name">
                <span id="1">Sympl</span><span id="cycle">Cycle</span>
                
            </h2>
            <ul className="nav">
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
                <li>
                    <a href="">
                        <CalendarMonthIcon/>
                        <span>Calendar</span>
                    </a>
                </li>
            </ul>
            <div className="Factbox">
                <h1>Todays Fact</h1>
                <div className="fact">
                    I am some cool fact of the day

                </div>
            </div>
        </nav>
    )
        
    
}