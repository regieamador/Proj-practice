import React from "react"

export default function Jokes(props){

    const [isShown , setIsShown] = React.useState(false)

    function showPunchline(){
        setIsShown(prevSetISShown => !prevSetISShown)
    }
    return (
        <div className="jokesContainer">
            {props.setup && <h4>{props.setup}</h4>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={showPunchline}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
            <hr></hr>
        </div>
    )
}