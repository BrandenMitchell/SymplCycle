import React from "react";


export default function Journal(){
    let date = new Date().toDateString();

    return(

        <div className="journal">
            <div className="header">
                <textarea name="entryTitle" id="headerArea">Entry Name</textarea>

            </div>
            <div className="mainText">
                <textarea name="journalEntry" id="journalEntry">{date}</textarea>
            </div>  
        </div>

    );
}