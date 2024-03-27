import HeaderFunFact from "./HeaderFunFact";
import BodyFunFacts from "./BodyFunFact";
import React from "react";

export default function FunFactsReact(){
    const [darkMode, setDarkMode] = React.useState(false)

    function modes(){
        setDarkMode(!darkMode)
    }

    return(
        <div className="FunFactDiv">
            <HeaderFunFact darkMode ={darkMode} modes ={modes}/>
            <BodyFunFacts darkMode ={darkMode}/>
        </div>
    )
}