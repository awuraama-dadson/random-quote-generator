const pokemonName = document.getElementById("pokemonName").value;
const image = document.getElementById("image")

// fetch("https://pokeapi.co/api/v2/pokemon/dito")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Sprite not found");
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));



async function fetchData() {
  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/")

    if(!response.ok){
      throw new Error('Sorry! Pokemon not found')
    }

    const data = await response.json()
    console.log(data)


 
  }catch(error){console.error(error)}
  
}

