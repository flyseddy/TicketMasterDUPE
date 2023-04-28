import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { ConcertCard } from './concert-card';
import { Grid } from '@mui/material'
import Navbar from './navbar';
import { GET_CONCERTS } from './queries';


/**
 * Quotes Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export const Concerts = () => {
  const { loading, error, data } = useQuery(GET_CONCERTS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  console.log(data.concerts);

  return (
    <>
    <Navbar />
    <Grid container spacing={2} marginTop={2}>
      {
      data.concerts.map((concert) => (
        <Grid item key={concert.id} xs={12} md={3} >
          <ConcertCard  concert={concert}/>
          </Grid>
      ))
    }

    </Grid>
    </>
  );
};

