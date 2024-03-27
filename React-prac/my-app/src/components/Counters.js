import React from "react"
import Counts from "./Counts"

export default function Counters(){
    const [num , setNum] = React.useState(0)
    
    function add(){
        setNum(prevCount => {
            return prevCount + 1
        })
    }
    function sub(){
        setNum(prevCount => {
            return prevCount - 1
        })
    }

    const isLike = true
    const [hangout, setHangout] = React.useState(true)

    const [thingsArray, setThingsArray] = React.useState([1,2,3])


    function flip(){
        setHangout(prevSetHangout => !prevSetHangout)
    }

    function addThing(){
        setThingsArray(prevState => [...prevState, prevState.length + 1])
    }

    

    const thingsElement = thingsArray.map(thing => <p>{thing}</p>)
    return(
        <div>
            <button className="btn btn-primary" onClick={addThing}>Add Element</button>
            {thingsElement}

            <div width="100px" height="50px" className="bg-dark text-light text-center p-5 mb-5" onClick={flip}>
                <h5>Wanna Hangout?</h5>
                <h1>{hangout ? "YES" : "NO"}</h1>
            </div>
            <h1>Do You Like Me?</h1>
            <h2>{isLike ? "YES!!!" : "NO YUCK!!!"}</h2>
            <button onClick={sub} className="btn btn-primary me-3">Sub</button>
            <button onClick={add} className="btn btn-warning">Add</button>
            <Counts numb = {num} key ={num}/>
        </div>
        
    )
}