// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data , images , files )
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve send data
//         asynchronously over the web.

//         fetch (url,{optional})
//         EX: {method:"POST"},{method:"PUT"},{method:"GET"},{method:"DELETE"}

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.weight))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase()
      .trim();

    // Check if input is empty
    if (!pokemonName) {
      alert("Please enter a Pokémon name");
      return;
    }

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    if (pokemonSprite) {
      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
    } else {
      throw new Error("No sprite available for this Pokémon");
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
