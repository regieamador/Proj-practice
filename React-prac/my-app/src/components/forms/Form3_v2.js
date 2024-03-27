import React from "react"


export default function Form3v2(){
    const [size, setSize] = React.useState(window.innerWidth)
    
    React.useEffect(() =>{
        function watchWidth(){
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        return function(){
            window.removeEventListener("resize", watchWidth) 
        }

    }, [])

    return(
        <h1>Window Width: {size}</h1>
    )
}