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

for(let i=0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name  + " (height: " + pokemonList[i].height + ")<br> " );
}
