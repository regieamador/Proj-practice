

export default function CardInfos(props){
    return(
        <div className="col-6">
            <div className="card cardComp-card">
                {props.img && <img src={props.img} width="500px" height="500px"></img>}
                {props.name && <h3>{props.name}</h3>}
                {props.fees && <h5><strong>{props.fees}</strong></h5>}
            </div>
        </div>
    )
}
