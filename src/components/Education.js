import React from "react";
import "./Education.css";
import FadeIn from "react-fade-in";

export default function Education() {
  return (
    <div class="outerdiv">
      <div class="outerbox">
        <div class="header">
          <FadeIn transitionDuration={400}>
            <h1 class="text2">Utdanning</h1>
          </FadeIn>
        </div>
        <div class="box">
          <FadeIn transitionDuration={400}>
            <h2>Universitetet i Bergen (UiB)</h2>
            <h3>Bachelorgrad i informasjonsvitenskap</h3>
            <p>
              I løpet av denne graden har jeg fått ett bredt innblikk i noen av
              markedets fremste programmerings-språk og teknologier. De
              inkluderer, men er ikke begrenset til:
            </p>
            <ul class="ul">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Django</li>
              <li>Maskinlæring</li>
              <li>Interaksjonsdesign</li>
              <li>Nettverksteori</li>
              <li>Informajonssystemer</li>
            </ul>
          </FadeIn>
        </div>
      </div>
      <p class="footer">Denne nettsiden er laget i React</p>
    </div>
  );
}
