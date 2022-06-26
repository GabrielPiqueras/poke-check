import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const H5 = styled(Paper)(({ theme }) => ({
    fontSize: '1.2rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
    // color: theme.palette.text.secondary,
}));

export const EfficienciesList = ({ title, effs}) => {

    return (
        <>
            {
                (effs.length > 0)
                &&
                (<>
                    <H5 className="pokedex-subtitle" variant="h5">
                        <b>{ title }:</b>
                    </H5>
                    <div className='efficiencies'>
                        <Grid xs={12} md={7} container spacing={0} className='pokedex-title animate__animated animate__fadeIn'>
                            {
                                effs.map(({type, value}) => {
                                    return (
                                        <Button xs={3} key={type} className={`efficiency ${type}`} variant="contained">
                                            <img src={`/assets/types/${type}.svg`} alt={type} />
                                            <span>{ type }</span>
                                        </Button>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                </>)
            }
        </>
    )
}

EfficienciesList.propTypes = {
    title: PropTypes.string.isRequired,
    effs: PropTypes.array.isRequired,
}