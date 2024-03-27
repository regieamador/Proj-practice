import React from "react";

export default function Form2(){
    const [formData, setFormData] = React.useState({
        email : "",
        password : "",
        confirmPass : "",
        join : false
    })


    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData => ({
            ...prevData, [name] : type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.confirmPass){
            console.log("password matched!")
        }
        else{
            console.log("password didnt match")
            return
        }
        if(formData.join){
            console.log("Thank for Joining!")
        }
    }

    //APIIII
    const [rand , setRand] = React.useState(0)
    function getStarWars(){
        const bilang = Math.ceil(Math.random() * 82)
        setRand(prevRand =>  bilang)
    }
    const [starwarsData, setStarwarsData] = React.useState({})

    const url = `https://swapi.dev/api/people/${rand}`

    React.useEffect(function(){
        fetch(url)
            .then(res => res.json())
            .then(data => setStarwarsData(data))
    }, [rand])

    //ADD USE STATE 
    const [count, setCount] = React.useState(0)

    function plus(){
        setCount(prevCount => prevCount + 1)
    }

    React.useEffect(function(){
        console.log({count})
    },[count]) //2nd parameter tells na useEffect ay mag run kapag nagbago yung sa 2nd params

    return(
        <div className="container p-5">
            <div className="container">
                <p>{count}</p>
                <button onClick={plus}>Add</button>
                <pre>{JSON.stringify(starwarsData, null, 2)}</pre>
                <p>{starwarsData.name}</p>
                <button onClick={getStarWars}> Get Random star wars character</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email: "
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="password"
                    placeholder="Password: "
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="password"
                    placeholder="Confirm Password: "
                    name="confirmPass"
                    value={formData.confirmPass}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="checkbox"
                    id="join"
                    checked={formData.join}
                    name="join"
                    onChange={handleChange}
                />
                <label htmlFor="join">Want to join our team?</label><br/>

                <button>Submit</button>
            </form>
        </div>
    )
}