import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import CircularProgress from '@mui/material/CircularProgress';

// Grid
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// Typography
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Divider
import Divider from '@mui/material/Divider';

// Tables
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// THEME WITH typography

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };


const Item = styled(Paper)(({ theme }) => ({
    color: theme.palette.color.paper,
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // color: theme.palette.text.secondary,
}));


export const PokemonInfo = () => {

    // Obtengo el nombre
    const { name } = useParams();
    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${encodeURI(name)}/`);

    const {
        id,
        order,
        height,
        weight,
        sprites,
        types,
        stats,
        moves
    } = !!data && data;

    if (!!data && data ) {
        const { type : { name } } = types[0];


        console.log(name);
    }

    return (
        <Grid id='pokemon-page' container spacing={0} sx={{ bgcolor: 'background.paper', color: 'color.paper' }}>
            {
                (loading)
                ?
                    <Box id='box-pokemon-info' sx={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
                        <Box id='loading-box' sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress disableShrink size={ 120 } />
                        </Box>
                    </Box>
                :
                    (!error && data)
                    ?
                        <>
                            {/* Nombre y número */}
                            <Grid container spacing={0}>
                                <Grid item xs={10}>
                                    <Item sx={{ color: 'color.paper' }}>
                                        <ThemeProvider theme={theme}>
                                            <Typography id="pokemon-name" variant="h3">{ name }</Typography>
                                        </ThemeProvider>
                                    </Item>
                                </Grid>
                                <Grid item xs={2}>
                                    <Item sx={{ color: 'color.paper' }}>
                                        <ThemeProvider theme={theme}>
                                            <Typography id="pokemon-order" variant="h3">#{ order }</Typography>
                                        </ThemeProvider>
                                    </Item>
                                </Grid>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>

                            {/* Datos principales y foto */}
                            <Grid item xs={12} sm={8} md={9}>
                                Datos aqui
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <Item sx={{ color: 'color.paper' }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <img id='pokemon-img' src={sprites.other.dream_world.front_default} alt={name} />

                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        {
                                            types.map(({type: { name }}) => {
                                                return <img key={name} style={{maxWidth: '15%', margin: '5% 3%'}} id='pokemon-img' src={`/assets/types/${name}.svg`} alt={name} />
                                            })
                                        }
                                    </div>
                                </Item>
                            </Grid>

                            {/* Titulo stats */}
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Item sx={{ color: 'color.paper' }}>
                                        <ThemeProvider theme={theme}>
                                            <Typography id="pokemon-name" variant="h3">Stats</Typography>
                                        </ThemeProvider>
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>

                            {/* Tabla stats */}
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={6}>
                                    <Item>
                                        <TableContainer component={Paper} sx={{ width: '100%' }}>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        {/*  */}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                {stats.map(({stat: { name }, base_stat}) => (
                                                    <TableRow
                                                        key={name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" sx={{ color: 'color.paper' }}>
                                                            { name }
                                                        </TableCell>
                                                        <TableCell align="right" sx={{ color: 'color.paper' }}>{ base_stat }</TableCell>
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <img style={{ maxWidth: '30%' }} src='https://img2.freepng.es/20180630/kll/kisspng-radar-chart-radar-chart-clip-art-pentagono-5b37fb325ad6f3.1245669015303954423721.jpg' alt='graphic' />
                                </Grid>
                            </Grid>
                        </>
                    :
                        <p>Error</p>
            
            }
            
        </Grid>
         
    )
}
