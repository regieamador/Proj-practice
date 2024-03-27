
import React from "react"

export default function Squares(props){

    
    const styles = {
        backgroundColor: props.on ? "black" : "gray"
    }

    return(
        <div onClick={props.pindot} className="box text-center" style = {styles}>         
                <h5>{props.on ? "ON" : "OFF"}</h5>
        </div>
    )
}