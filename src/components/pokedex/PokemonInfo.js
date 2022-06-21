import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const PokemonInfo = () => {

    // Obtengo el nombre
    const { name } = useParams();

    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${encodeURI(name)}/`);
    const { height } = !!data && data;
    console.log('loading', loading);
    console.log('error', error);

    // useEffect(() => {
    // //   name && getPokemonByName(name).then(pokemon => setPokemon(pokemon));
    // }, [ name ]);

    return (
            <Box id='box-pokemon-info' sx={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
                
                {
                    (loading)
                    ?
                        <Box id='loading-box' sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress disableShrink size={ 120 } />
                        </Box>
                    :
                        (!error)
                        ?
                            <Box>
                                <h1>{ name }</h1>
                                <h2>Altura: { height }</h2>
                            </Box>
                        :
                            <p>Error</p>
                }
            </Box>
    )
}
