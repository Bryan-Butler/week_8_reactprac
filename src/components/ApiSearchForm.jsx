// Form component 
// grabs a Pokemon name from user input
// makes a fetch request on submit
// returns data 

import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";

export function ApiSearchForm(){
	let apiUrlBase = useContext(ApiContext);
	let [searchData, setSearchData] = useState("pikachu");

	const searchForPokemon = async () => {
		// console.log(`API URL is: ${apiUrlBase}`);
		let response = await fetch(apiUrlBase + "pokemon/" + searchData);
	}

	return(
		<div>
			<h5>Enter a Pokemon name:</h5>
			<input 
				type="text" 
				name="pokemonName" 
				id="pokemonName" 
				value={searchData} 
				onChange={event => setSearchData(event.target.value)} 
			/>
			<button onClick={searchForPokemon} type="submit">Search</button>
		</div>
	)

}