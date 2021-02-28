import React from "react";
import "./Work.css";
import Grid from "@material-ui/core/Grid";
import FadeIn from "react-fade-in";

export default function Work() {
  return (
    <div class="outerdiv">
      <Grid container class="outerbox">
        <FadeIn transitionDuration={400}>
          <h1>Arbeidserfaring</h1>

          <FadeIn transitionDuration={400}></FadeIn>
          <Grid item xs="4" class="work">
            <h2>Lampehuset Lagunen</h2>
            <h3>08.2020 - Nåværende</h3>
            <p>Deltidsansatt ved Lampehuset Lagunen</p>
          </Grid>

          <Grid item xs="4" class="work">
            <h2>Obs Bygg Kokstad</h2>
            <h3>04.2018 - 05.2019</h3>
            <p>
              Deltidsansatt ved Obs Bygg Kokstad, bestillingsansvarlig for
              lyspærer og elektriske komponenter.
            </p>
          </Grid>

          <Grid item xs="4" class="work">
            <h2>Obs Bygg Haugesund</h2>
            <h3>04.2017 - 09.2017</h3>
            <p>Sommervikar ved Obs Bygg Haugesund</p>
          </Grid>
        </FadeIn>
      </Grid>
      <p class="footer">Denne nettsiden er laget i React</p>
    </div>
  );
}
