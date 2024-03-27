
export default function BodyFunFacts(props){
    
    const styles ={
        backgroundColor: props.darkMode ? "rgb(76, 74, 74)" : "white",
        color: props.darkMode ? "white" : "black",
    }

    return(
        <div className="BodyFunFact" style={styles}>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}