import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { GET_CONCERT, GET_SHOPPING_CART } from "./queries";
import Navbar from "./navbar";
import { addcartitem } from "./mutations";

export const ConcertDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [addProductToCart] = useMutation(addcartitem, {
    variables: {
      input: {
        id: location.state.id,
        name:location.state.name,
        venue:location.state.venue,
        artists:location.state.artists,
        date: location.state.date,
        location: location.state.location,
        photo: location.state.photo
      }
    },
    onCompleted: (data, options) => {
        console.log(data, options)
    }
  });

  const { data, loading, error } = useQuery(GET_CONCERT, {
    variables: { concertId: id },
  });

  if (error) return "errorrrrr";

  if (loading) return "loading...";

  const concert = data.concert;

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
        <Link to={`/shoppingCart`}>
          <Button onClick={() => addProductToCart()}>Add to Cart</Button>
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


