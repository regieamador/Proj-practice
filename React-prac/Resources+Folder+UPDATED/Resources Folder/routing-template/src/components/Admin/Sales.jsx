import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const Sales = () => {
    const [userId, setUserId] = useState(null)

    const fetchTodos = async (userId) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
            params: userId
        });
        console.log(response.data); // Log the response data
        return response.data;
    };
    

    const {data: todos, error, isLoading} = useQuery({
        queryKey: userId? ["user", userId, "todos"] : ["todos"],
        queryFn: fetchTodos
    })

    return (
        <div>
            <h2>Admin Sales Page!</h2>
            <ol>
                {error && <h2 style={{color: "red"}}>Something went wrong!</h2>}
                {isLoading && <h2>Loading ...</h2>}

                <select onChange={e => setUserId(parseInt(e.target.value))} value={userId ? userId : ""}>
                    <option value="">Select User</option>
                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                    <option value="3">User 3</option>
                    <option value="4">User 4</option>
                    <option value="5">User 5</option>
                </select>

                {todos?.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ol>
        </div>
    )
};

export default Sales;
