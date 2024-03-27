
import React from "react";
import QuizBody from "./QuizBody";
import QuizStart from "./QuizStart";

export default function QuizApp(){
    const [start, setStart] = React.useState(true)

    function startGame(){
        setStart(prevState => !prevState)
    }
    return(
        <div className="container">
            {start ? <QuizBody /> : <QuizStart startGame ={startGame}/>}
        </div>
    )
}