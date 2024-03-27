
import travelData from "./travelData"
import TravelProps from "./TravelProps"

export default function TravelContainer(){
    const travels = travelData.map(travel => {
        return (
        <TravelProps key={travel.title} travel = {travel}/>
        )
    })
    return (
        <div className="travelContainer bg-dark text-light">
            <div className="banner">
                <h2>My Travel Journal</h2>
            </div>

            <div className="travelBody">
                {travels}
            </div>
        </div>
    )
}