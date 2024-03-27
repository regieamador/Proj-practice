import React from "react"
import 'boxicons/css/boxicons.css';
import Stars from "./Stars";

export default function Resume(){
    const [contact , setContact] = React.useState({
        img : "images/profile.jpg",
        name : "Regie Amador",
        phone : "09206265551",
        email : "regieamasdor@gmail.com",
        isFavorite : false
    })

    function addFavorite(){
         setContact(prevContact => {
            return{
                ...prevContact, isFavorite: !prevContact.isFavorite
            }
         })
    }

    return(

        <div className="text-center p-5">
            <img src={contact.img} width="300px" className="cardx"></img>
            <Stars isFilled = {contact.isFavorite} clickFunction = {addFavorite}/>
            <h1>{contact.name}</h1>
            <h3>{contact.phone}<i className="star" class='bx bx-happy-heart-eyes bx-spin'></i></h3>
            <p>{contact.email}</p>
        </div>
    )
}