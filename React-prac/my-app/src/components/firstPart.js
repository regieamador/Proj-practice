import logo from "../img/bnb.png"
import mainPic from "../img/main.png"

export default function MainPart(){
    return(
        <div className="first">
            <nav className="navbar">
                <img src={logo}></img>
            </nav>
            <div className="main">
                <img src={mainPic}></img>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}