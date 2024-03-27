import CardInfos from "./cardInfos"
import pic1 from "../img/profile.jpg"
import pic2 from "../img/bnb.png"
import pic3 from "../img/logo512.png"
import pic4 from "../img/main.png"

export default function CardComponents (){
    return(
        <div className="container">
            <div className="row g-4 mb-5">
                <CardInfos
                img = {pic1}
                name = "Regie Amador"
                fees = {69}
                />
                <CardInfos
                img = {pic2}   
                name = "Juan Cruz"
                fees = {100}
                />
                <CardInfos
                img = {pic3}   
                name = "Angela Maria"
                fees = {500}
                />
                <CardInfos
                img = {pic4}
                name = "Tony Starks"
                fees = {1000000}
                />
            </div>  
        </div>
    )
}