let imahe = document.getElementById("dog-img");
const btn1 = document.getElementById("btn1");

let heroImg = document.getElementById("hero-img");
let btn2 = document.getElementById("btn2");
const heroStats = document.getElementsByClassName("heroStats")[0];
let tite =document.getElementById("tite");

btn1.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      imahe.setAttribute("src", json.message);
    });
});

btn2.addEventListener("click", () => {
  let heroesID = Math.floor(Math.random() * 731);

  fetch(`https://www.superheroapi.com/api.php/3651867575041844/${heroesID}`)
    .then((response) => response.json())
    .then((json) => {
      heroImg.setAttribute("src", json.image.url);
      heroStats.innerHTML = `<h5>Name: ${json.name}</h5>
        <h5>Intelligence: ${json.powerstats.intelligence}</h5>
        <h5>Strength: ${json.powerstats.strength}</h5>
        <h5>Speed: ${json.powerstats.speed}</h5>
        <h5>Power: ${json.powerstats.power}</h5>`;
    });
});

// heroesDiv.innerHTML = `<img src="${json.image.url}" style="width: 500px; height: 500px;"/>

// async function fetchTimezone() {
//   const url = 'https://api-basketball.p.rapidapi.com/timezone';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'e470be4af2msha8644294b969121p1d28d5jsn544e1f47f040',
//       'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     tite.innerHTML = result;
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the function
// fetchTimezone();