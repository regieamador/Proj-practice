import 'boxicons/css/boxicons.css';
import React from 'react';

export default function HeaderFunFact(props){
    
    const styles ={
        backgroundColor: props.darkMode ? "rgb(48, 47, 47)" : "rgb(150, 150, 150)",
        color: props.darkMode ? "white" : "rgb(97 218 251)",
    }

    return(
        <div className="fun-header" style={styles}>
            <div className="navbrand">
                <img src="images/logo512.png" width="50px;"/>
                <h3>ReactFacts</h3>
            </div>

            <div>
               <span id='modeIcons' onClick={props.modes}>{props.darkMode ? <i class='bx bx-moon' ></i> :<i class='bx bxs-sun' ></i>}</span>
            </div>
        </div>
    )
}