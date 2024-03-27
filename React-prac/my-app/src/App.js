
import MainPart from "./components/firstPart";
import CardComponents from "./components/cardComponent";
import Jokes from "./components/joke"
import jokesData from "./components/jokesData";
import FruitsDiv from "./components/fruitsRow";
import TravelContainer from "./components/travel/TravelContainer";
import Memes from "./components/meme/Memes";
import Counters from "./components/Counters";
import Resume from "./components/Resume";
import Parent from "./components/User/Parent";

export default function App() {
  const cornyJokes = jokesData.map(corny =>{
    return < Jokes setup={corny.tanong} punchline={corny.sagot}/>})

  return (
    <div className="container1">
      <Parent /> <br/><br/><br/><br/><br/><br/><br/>
      <Resume /> <br/><br/><br/><br/><br/><br/><br/>
      <Counters/>
      <Memes />
      <TravelContainer/>
      <br></br>
      <FruitsDiv/>
      <br></br>
      <hr></hr>
      <MainPart/>
      <CardComponents/>
      <Jokes setup = "Burat Kaba?" punchline = "Anong Baket, OO!"/>
      {cornyJokes}
      
    </div>
  );
  
}

// const arr1 = [1,2,3,4,5]

// let map1 = arr1.map(function(x){
//   return x * 2
// })

//   console.log(map1)

const peopleNames = ["regie", "amador", "luisaga"]

let names = peopleNames.map(function(name){
  return name
})

console.log(names)