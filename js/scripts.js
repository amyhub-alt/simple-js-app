
let pokemonRepository = (function() {
    let pokemonList = [
        {
            name: "Bulbasaur",
            height: 7,
            types:["grass", "poison"]
        },
        {   
            name: "Charmander",
            height: 0.6,
            types:["blaze", "solar-power"]
        },
        {   
            name: "Jigglypuff",
            height: 0.5,
            types:["cute-charm", "friend-guard"]
        } 
    ];

    return{
        add:function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function(){
            return pokemonList;
        }
    };
    })();

   console.log(pokemonRepository.getAll());
   pokemonRepository.add({ name: 'Pikachu' });
   console.log(pokemonRepository.getAll());



    pokemonRepository.getAll().forEach(function(pokemon){
        if (pokemon.height > 1) {
            document.write(pokemon.name + " (height: " + pokemon.height + ")- Wow, that's big!<br>" );
        } else {
            document.write(pokemon.name + " (height: " + pokemon.height + ")<br>")
        }
    });

   


// function favFood(response) {
//    if (response === undefined){
//     console.log("Please enter your favorite food!");
//    } else {
//     console.log(`Your favorite food is ${response}`)
//    }
// }

// favFood("chicken fingers");



