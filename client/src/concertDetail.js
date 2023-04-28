import { useQuery } from "@apollo/client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_CONCERT } from "./queries";
import Navbar from "./navbar";

export const ConcertDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_CONCERT, {
    variables: { concertId: id },
  });

  if (error) return "errorrrrr";

  if (loading) return "loading...";

  const concert = data.concert;
  console.log(concert);
  return (
    <>
   <Navbar />
    <Grid container spacing={4} marginTop={2}>
    <Grid item xs={2}></Grid>
    <Grid item xs={3}>
        <Typography variant="h5">{concert.name}</Typography>
        <br></br>
        <Typography>{concert.bio}</Typography>
        <Typography><strong>Date</strong>: {concert.date}</Typography>
        <Typography><strong>Location</strong>: {concert.location}</Typography>
        <Typography><strong>Venue</strong>: {concert.venue}</Typography>
        <Link to={`/concertDetail/edit/${id}`} state={{name: concert.name,artists:concert.artists, date: concert.date, photo: concert.photo, lcoation:concert.location}}>
          <Button>Add to Cart</Button>
        </Link>
      </Grid>

      <Grid item xs={2}>
      <Box component="img" src={concert.photo}    sx={{
          maxHeight: { xs: 350, md: 250 },
          maxWidth: { xs: 500, md: 700 },
        }}/>
        <Typography variant="h4">{concert.name}</Typography>
      </Grid>

    </Grid>
    
  
    </>
  );
};


