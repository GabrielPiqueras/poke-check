export const getPokemonByName = async(name) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(name)}/`;
    const request = await fetch(url);
    const response = await request.json();
    const { abilities } = response;

    const data = {
        abilities
    }

    return data;
}