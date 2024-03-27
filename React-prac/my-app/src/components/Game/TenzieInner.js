

export default function TenzieInner(props){

    const style ={
        backgroundColor : props.isHeld ? "darkblue" : "black"
    }
    return(
        <div className="numss" style={style} onClick={props.hold}>
            <h6>{props.value}</h6>
        </div>
    )
}