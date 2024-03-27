import Form3v2 from "./Form3_v2"
import React from "react"

export default function Form3(){
    const [show , setShow] = React.useState(true)

    function showWidth(){
        setShow(prevState => !prevState)
    }
    return(
        <div className="container p-5">
            <button onClick={showWidth} className="btn btn-primary">{show ? "Hide Width" : "Show Width"}</button>
            {show && <Form3v2/>}
        </div>
    )
}