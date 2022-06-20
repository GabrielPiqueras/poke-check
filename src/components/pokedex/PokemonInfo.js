import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../../helpers/getPokemonByName';

export const PokemonInfo = () => {

    // Obtengo el nombre
    const { name } = useParams();

    // Declaro estado
    const [ pokemon, setPokemon ] = useState({});
    const { height } = pokemon;

    useEffect(() => {
      name && getPokemonByName(name).then(pokemon => setPokemon(pokemon));
    }, [ name ]);

    return (
        <div>
            {
                (Object.keys(pokemon).length > 0)
                ?
                    (<div>
                        <h1>{ name }</h1>
                        <h2>Altura: { height }</h2>
                    </div>)
                :
                    <h2>No encontrado</h2>

            }
        </div>
    )
}
