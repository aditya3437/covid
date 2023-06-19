import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styled from "./Cards.module.css";
import CountUp from 'react-countup';


const Cards = ({data:{cases,deaths,recovered,active}}) => {
  console.log(cases);
  
  return (
    <div className={styled.container}>
      <Grid container spacing={3} justify="centre" alignItems='center'>
        <Grid item component={Card} xs={12} md={3} className={(styled.card,styled.infected)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cases} duration={2.5} separator="," />
            </Typography>
            <Typography color="text.secondary">{active}</Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={(styled.card,styled.recovered)} >
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5"><CountUp start={0} end={recovered} duration={2.5} separator="," /></Typography>
            <Typography color="text.secondary">{active}</Typography>
            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={(styled.card,styled.deaths)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5"><CountUp start={0} end={deaths} duration={2.5} separator="," /></Typography>
            <Typography color="text.secondary">{active}</Typography>
            <Typography variant="body2">Number of deaths cause by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
