import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFetch } from '../../hooks/useFetch';
// Icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Router
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

// Helpers
import { getPokemonByName } from '../../helpers/getPokemonByName';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  height: '100%',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const Pokedex = () => {

    const inputName = useRef();
        
    const navigation = useNavigate();
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('q');

    const [ pokemon, setPokemon ] = useState(null);

    useEffect(() => {
      getPokemonByName(name).then(pokemon => setPokemon(pokemon));
    }, [ name ]);
    
    console.log(pokemon);

    // const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${encodeURI(name)}/`);
    
    const handleSubmit = (e) => {      
      e.preventDefault();

      const name = document.querySelector('#pokemon').value;
      alert(name)
      navigation({
        pathname: '/pokedex',
        search: `q=${name}`
      });
    }

    return (
        <Box sx={{ flexGrow: 1 }} style={{display: 'flex'}}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {
                (!pokemon)
                ?
                  (<Item>
                    <form onSubmit={ handleSubmit }>
                      <TextField
                        id="pokemon"
                        ref={ inputName }
                        placeholder="pikachu"
                        type="search"
                        autoFocus
                        required
                      />

                      <Button id="search-btn" type="submit" variant="contained" startIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                      </Button>
                    </form>
                  </Item>)
                :
                  (<div>
                    <h3>
                      Información de { name }
                    </h3>

                    <pre>
                      {/* { JSON.stringify(pokemon) } */}
                    </pre>
                  </div>)
              }
            </Grid>
          </Grid>
        </Box>
      );
}
