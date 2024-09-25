import React from "react";
import './index.css';
import {Routes, Route} from "react-router-dom"
import Sidebar from "./components/sidebar.jsx";
import Journal from "./components/journal.jsx"
import Dashboard from "./components/Dashboard.jsx";
import Calendar from "./components/calendar.jsx"
export default function App() {
    return (
        <div className="App">
            <aside className="navBar">
                    <Sidebar />
            </aside>
            <div className="mainMenu">
                <Routes>

                    <Route path="/main_window" element={<Dashboard/>}/>
                    <Route path="/Home" element={<Dashboard/>}/>
                    <Route path="/Journal" element={<Journal/>}/>
                    <Route path="/Calendar" element={<Calendar/>}/>

                </Routes>
            </div>
            

        </div>
        
    )
}
// SymplCycle is an app that allows women to track their period using a variety of tools. The app contains a journal section to allow women to take note of how they are feeling day to day and allows them to log symptoms. 
//Contains a Calendar to log days of menstruation and the different stages of their period and more.