
import React from "react"

export default function Header(props){
    const [messages, setMessages] = React.useState(["A", "b"])

    return(
        <div>
            {messages.length > 0 && (<h1>You Have {messages.length} unread message{messages.length > 1 && "s"}</h1>)}
            <h1>Current User: {props.user}</h1>
        </div>
    )
}