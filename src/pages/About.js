import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/pizza5.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="top"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="bottom">
        <h1>ABOUT US</h1>
        <p>
          <span className="capital">L</span>
          orem Ipsum (afgekort: lipsum) is de benaming van een tekst die vaak
          door drukkers, zetters, grafisch ontwerpers en dergelijke gebruikt
          wordt om te kijken hoe een tekst of lettertype eruit ziet,
          bijvoorbeeld in letterproeven, op een webpagina of op een kaft van een
          boek. De standaardversie van het Lorem Ipsum stamt uit circa 1500 en
          begint als volgt:
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </blockquote>
        <p>
          Op deze tekst bestaan echter talloze varianten, die alleen de eerste
          zinsnede (Lorem ipsum dolor sit amet, consectetur adipisicing elit)
          steeds gemeen hebben. Zo is bijvoorbeeld ook de volgende tekst in
          omloop:
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
          nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
          adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
          Vestibulum condimentum condimentum augue. Nunc purus risus, volutpat
          sagittis, lobortis at, dignissim sed, sapien. Fusce porttitor iaculis
          ante. Curabitur eu arcu. Morbi quam purus, tempor eget, ullamcorper
          feugiat, commodo ullamcorper, neque.
        </blockquote>
        <p>
          De teksten zijn een vorm van pseudo-Latijn: ze lijken op het eerste
          gezicht origineel Latijn te zijn, maar hebben in werkelijkheid
          volstrekt geen betekenis. De tekst staat vol met spelfouten en
          verbasteringen. Dat is ook de reden waarom de teksten gebruikt worden
          door drukkers en zetters: bij een leesbare tekst zou de lezer afgeleid
          worden door de inhoud, terwijl het alleen om de vormgeving gaat.
          Bovendien heeft het Lorem Ipsum een redelijk normale afwisseling van
          de verschillende letters en korte en lange woorden, waardoor het beter
          bruikbaar is dan bijvoorbeeld Dit is een voorbeeldtekst.
        </p>
      </div>
    </div>
  );
}

export default About;
