import React, { useEffect, useState } from "react";
import axios from "axios";

import './Admin.css'
import { useQuery } from "@tanstack/react-query";

const Sellers = () => {

    const fetchSellers = async () => {
        const  response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
    }


    const {data: sellers, error, isLoading} = useQuery({
        queryKey: ["sellers"],
        queryFn: fetchSellers,
    })



    const [name, setName] = useState("")
    // const [isLoading, setIsLoading] = useState(false)
    // const [errors, setErrors] = useState("")
    // const [sellers, setSellers] = useState([])

    // useEffect(() => {
    //     setIsLoading(true)
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(response => {
    //         setSellers(response.data)
    //         setIsLoading(false)
    //     })
    //     .catch(err => {
    //         setIsLoading(false)
    //         setErrors(err.message)
    //     })
    // } , [])

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const deleteSeller = (id) => {
        const newSellers = sellers.filter(seller => id !== seller.id)
        setSellers(newSellers)

        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .catch(err => {
            setIsLoading(false)
            setErrors(err.message)
        })
    }

    const addSeller = () => {
        const newSeller = {
            name : name,
            id : sellers.length + 1
        }

        setSellers([newSeller, ...sellers])

        axios.post("https://jsonplaceholder.typicode.com/users", newSeller)
        .then(res => setSellers([res.data, ...sellers]))
        .catch(err => {
            setErrors(err.message)
            setSellers(sellers)
        })
    }

    const updateSeller = (seller) => {
        const updatedSeller = {
            ...seller, name : seller.name + " Updated"
        }

        const updatedSellers = sellers.map(s =>
            seller.id === s.id ? updatedSeller : s
        );
        setSellers(updatedSellers);

        axios.patch(`https://jsonplaceholder.typicode.com/users/${seller.id}`, updatedSeller)
            .then(() => setIsLoading(false))
            .catch(err => {
                setErrors(err.message);
                setSellers(sellers);
            });
    };

    return(
        <div>
            <h3>Admin Sellers Page</h3>
            <input type="text" name="name" onChange={handleChange}/>
            <button onClick={addSeller}>Add Seller</button>
            
            <div>
                {isLoading && <h2>Loading ...</h2>}
                {error && <div><h1 style={{color: "red"}}>{error.message}</h1></div>}

                     <table>
                        <tbody>
                        {sellers?.map(
                            seller =>
                                <tr key={seller.id}>
                                    <td>{seller.name}</td>
                                    <td>
                                        <button onClick={() => updateSeller(seller)}>Update</button>
                                        <button onClick={() => deleteSeller(seller.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                     </table>

            </div>
        </div>
    )
};

export default Sellers;
