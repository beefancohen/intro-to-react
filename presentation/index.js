// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Spectacle
} from "spectacle";

// import slides
import SLIDES from "./slides";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./index.css");

const images = {
  reactLogo: require("../assets/logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#1da1f2",
  secondary: "#e6ecf0",
  tertiary: "#a5f2aa"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom"]} transitionDuration={500} progress="bar">
          <SLIDES.Intro transition={["zoom"]}/>
          <SLIDES.WhyReact logo={images.reactLogo} transition={["zoom"]} />
          <SLIDES.ComponentSlide transition={["zoom"]} />
        </Deck>
      </Spectacle>
    );
  }
}
