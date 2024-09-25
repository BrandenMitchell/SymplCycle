import * as React from 'react';
import {useState} from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Calendar() { 
  const daysOfWeek = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const currentDate = new Date()
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  
  const daysInMonth = new Date(currentYear, currentMonth + 1,0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  
  console.log(daysInMonth, firstDayOfMonth)



  return (
    
      <div className="wrapper">
      <header>
        <p className="current-date"></p>
        <div className="icons">
          <span><ChevronLeftIcon/></span>
          <span><ChevronRightIcon/></span>
        </div>
      </header>
      <div className="calendar">
        <div className="weekdays">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="days">

        </div>
      </div>
      
    </div>
    
    

  );
  

}


