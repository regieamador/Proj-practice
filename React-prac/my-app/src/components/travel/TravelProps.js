import pics from "../../img/profile.jpg"

export default function TravelProps(props){
    return (
        <div className="travelItems d-lg-flex d-block">
            <img src={pics} width="450px" height="500px" className="img-fluid"></img>

            <div className="travel-info">
                <div className="locNlink d-flex">
                    <h5 className="me-5">{props.travel.location}</h5>
                    <a href={props.travel.url} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.travel.title}</h1>
                <div className="startEnd">
                    <p>{props.travel.startDate} - {props.travel.endDate}</p>
                </div>
                <p className="desc">{props.travel.description}</p>
            </div>
        </div> 
    )
}