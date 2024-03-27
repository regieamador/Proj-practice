
import React from "react"
import TenzieInner from "./TenzieInner"

export default function Tenzie(){
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzie] = React.useState(false)

    React.useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld)
        const firstNum = dice[0].value
        const sameNum = dice.every(die => die.value === firstNum)
        
        if(allHeld && sameNum){
            alert("You Win!!!")
            setTenzie(true)
        }

    },[dice])

    function allNewDice(){
        const newDice = []
        for(let i = 1; i <= 10; i++){
            newDice.push({value : Math.floor(Math.random() * 10), isHeld : false})
        }
        return newDice
    }

    function roll(){
        if(!tenzies){
            setDice(prevDice => prevDice.map(die =>
                die.isHeld === true ? die : {...die, value : Math.floor(Math.random() * 10)}
            ))
        }
        else{
            setTenzie(false)
            setDice(allNewDice)
        }
    }
  
    function hold(index){
        setDice(prevDice => prevDice.map((die, i) => (
            i === index ? {...die, isHeld : !die.isHeld} : die
        )))
    }

    const diceElement = dice.map((die, index) => 
        <TenzieInner
        key = {index}
        value ={die.value} 
        isHeld = {die.isHeld}
        hold = {()=>hold(index)}
        />)    

    return(
        <div className="container tenzieDiv text-center p-5">
            <h1>Tenzies</h1>
            <h4 >Roll until all the dice  are the same. Click each die <br/> to freeze it at its current value between rolls.</h4>
            <div className="diceBtn mt-5">
                <div className="btns">
                    {diceElement}
                </div>
            </div>
            <button className="btnDice btn btn-lg btn-primary mt-5" onClick={roll}>{tenzies ? "New Game" : "Roll"}</button>
        </div>
    )
}


// AFTER USE STATE
// React.useEffect(function(){
//     const allHeld = dice.every(die => die.isHeld)
//     const firstNum = dice[0].value
//     const sameValue = dice.every(die => die.value === firstNum)

//     if(allHeld && sameValue){
//         setTenzie(true)
//         alert("Congratulations You Win")
//     }
// }, [dice])

// function allNewDice(){
//     const newDice = []
//     for(let i = 1 ; i <= 10 ; i++){
//        newDice.push({value: Math.ceil(Math.random() * 6), isHeld : false})
//     }
//     return newDice
// }

// function roll(){
//     if(!tenzies){
//         setDice(prevDice => prevDice.map(die => {
//             return die.isHeld ? die : {...die, value : Math.ceil(Math.random() * 6)}
//         }))
//     }
//     else{
//         setTenzie(false)
//         setDice(allNewDice())
//     }     
// }

// function hold(index){
//     setDice(prevDice => {
//         const updatedDice = [...prevDice]
//         updatedDice[index].isHeld = !updatedDice[index].isHeld
//         return updatedDice
//     })    
//     // setDice(prevDice => prevDice.map(die => {
//     //     return die.id === index ? {...die, isHeld : !die.isHeld} : die
//     // }))
// }

//   //CREATING DICE ELEMENT
// const diceElement = dice.map((die, index) => 
//     <TenzieInner 
//         id = {index}
//         value = {die.value} 
//         isHeld = {die.isHeld} 
//         hold = {() => hold(index)}
//     />
//     )




// 2nd try
// React.useEffect(function(){
//     const allHeld = dice.every(die => die.isHeld)
//     const firstNum = dice[0].value
//     const sameNum = dice.every(die => die.value === firstNum)

//     if(allHeld && sameNum){
//         setTenzie(true)
//         alert("Congrats you win")
//     }
// }, [dice])


// function allNewDice(){
//     const newDice = []
//     for(let i=1 ; i<=15 ; i++){
//         newDice.push({value : Math.ceil(Math.random() * 6) , isHeld : false})
//     }
//     return newDice
// }

// function roll(){
//     if(!tenzies){
//         setDice(dice.map(die => 
//             die.isHeld ? die : {...die, value : Math.ceil(Math.random() * 6)}
//         ))
//     }
//     else{
//         setTenzie(false)
//         setDice(allNewDice)
//     }
// }

// function hold(index){
//     setDice(prevDice => prevDice.map((die, i) => 
//     (i === index ? {...die, isHeld : !die.isHeld} : die)    
//     ))
// }

// const diceElement = dice.map((die, index) => 
//     <TenzieInner 
//     id = {index}
//     value={die.value} 
//     isHeld ={die.isHeld}
//     hold ={() => hold(index)}
//     />)