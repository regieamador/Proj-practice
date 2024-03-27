
import React from "react"

export default function Form(){
    const [data, setData] = React.useState({
        firstName : "",
        lastName : "",
        email : "",
        comment : "",
        isFriendly : false,
        employment : "",
        favColor : ""
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setData(prevData => {
            return {
                ...prevData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    return(
       <div className="container p-5 my-5">
            <form>
                <input 
                type="text"
                placeholder="First Name: "
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                />

                <input 
                type="text"
                placeholder="Last Name: "
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                />

                <input 
                type="email"
                placeholder="Email: "
                name="email"
                onChange={handleChange}
                value={data.email}
                />

                <textarea 
                placeholder="Comments: " 
                name="comment"
                onChange={handleChange}
                value={data.comment}
                rows={5}
                cols={100}
                /> <br/>

                <input 
                type="checkbox"
                id="isFriendly"
                checked={data.isFriendly}
                name="isFriendly"
                onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are You Friendly</label>

                <fieldset>
                    <legend>Current employment status</legend>
                    
                    <input 
                        type="radio"
                        id="unemployed"
                        name = "employment"
                        onChange ={handleChange}
                        value = "unemployed"
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name = "employment"
                        onChange ={handleChange}
                        value = "part-time"
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name = "employment"
                        onChange ={handleChange}
                        value = "full-time"
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                    
                </fieldset> <br/>

                <select id="favColor" value={data.favColor} onChange={handleChange} name="favColor">
                    <option value="">--choose--</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </form>
       </div>
    )
}