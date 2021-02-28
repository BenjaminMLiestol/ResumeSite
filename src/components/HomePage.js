import "./HomePage.css";
import React from "react";
import FadeIn from "react-fade-in";
import FadeInSection from "./FadeInSection";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import Image from "./me.jpg";

import newsF1 from "./newsf1.PNG";
import newsF2 from "./newsf2.PNG";
import newsF3 from "./newsf3.PNG";
import foodie1 from "./foodie1.PNG";
import foodie2 from "./foodie2.PNG";
import foodie3 from "./foodie3.PNG";

export default function HomePage() {
  return (
    <div>
      <Box class="hero">
        <Toolbar id="back-to-top-anchor" />
        <Box class="textBoxHeader">
          <Typography variant="h1" class="head">
            Benjamin Liestøl
          </Typography>
        </Box>
        <div class="top">
          <img src={Image} class="image" title="Benjamin Liestøl" alt="hello" />
          <p class="kek">
            Jeg er en 25 år gammel student ved Universitetet i Bergen, hvor jeg
            studerer informasjonsvitenskap. I løpet av bachelor graden min har
            jeg vært med på flere prosjekter innen systemutvikling og
            interaksjonsdesign.{"\n\n"}
            Som person er jeg hardtarbeidende, disiplinert, livlig, fokusert,
            løsningsorientert og alltid åpen for nye utfordringer!
          </p>
        </div>
      </Box>
      <Grid container xs={12} class="newsFlash">
        <Grid item class="textBoxHeader2">
          <FadeInSection>
            <Typography variant="h1" class="header2">
              Newsflash
            </Typography>
            <Typography
              variant="p"
              class="text3"
              style={{ whiteSpace: "pre-line" }}
            >
              NewsFlash var mitt første prosjekt i studiet og gikk ut på å samle
              mange nyheter fra mange forskjellige kilder i en og samme app!
              Denne ble skrevet i ren HTML, CSS og JavaScript som også gjorde
              det til en fin utfordring!
            </Typography>
          </FadeInSection>
        </Grid>
        <div class="news">
          <Grid item class="textBoxHeader4">
            <FadeInSection>
              <Box class="newsImg">
                <img src={newsF1} class="image2" alt="" title="Homescreen" />
              </Box>
            </FadeInSection>
          </Grid>
          <Grid item class="textBoxHeader3">
            <FadeInSection>
              <Box class="newsImg">
                <img
                  src={newsF2}
                  class="image2"
                  alt=""
                  title="Smaller homescreen"
                />
              </Box>
            </FadeInSection>
          </Grid>
          <Grid item class="textBoxHeader3">
            <FadeInSection>
              <Box class="newsImg">
                <img src={newsF3} class="image2" alt="" title="Ar" />
              </Box>
            </FadeInSection>
          </Grid>
        </div>
      </Grid>
      <Grid container xs={12} class="foodie">
        <Grid item class="textBoxHeader2">
          <FadeInSection>
            <Typography variant="h1" class="header2">
              Foodie
            </Typography>
            <Typography variant="p" class="text4">
              Mitt andre prosjekt var appen Foodie. Her gikk vi i en annen
              retning og valgte å bruke Python til å utvikle med. Vi brukte
              KivyMD biblioteket til dette. Foodie er en applikasjon som samler
              inn tusenvis av mat-oppskrifter og presenterer dette til brukeren
              ved hjelp av MaterialUI. Årsaken til å bruke python var i hovedsak
              å lære mer om språket i seg selv!
            </Typography>
          </FadeInSection>
        </Grid>
        <div class="food">
          <Grid item class="textBoxHeader4">
            <FadeInSection>
              <Box class="newsImg">
                <img src={foodie1} class="image2" alt="" title="Homescreen" />
              </Box>
            </FadeInSection>
          </Grid>
          <Grid item class="textBoxHeader3">
            <FadeInSection>
              <Box class="newsImg">
                <img src={foodie2} class="image2" alt="" title="Recipie" />
              </Box>
            </FadeInSection>
          </Grid>
          <Grid item class="textBoxHeader3">
            <FadeInSection>
              <Box class="newsImg">
                <img
                  src={foodie3}
                  class="image2"
                  alt=""
                  title="Search function"
                />
              </Box>
            </FadeInSection>
          </Grid>
        </div>
        <p class="footer">Denne nettsiden er laget i React</p>
      </Grid>
    </div>
  );
}
