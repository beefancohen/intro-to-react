// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {};

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
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ReactJS
            </Heading>
            <Heading size={1} fit caps textColor="white">
              Ethan Cohen
            </Heading>
            <Link href="https://twitter.com/beefancohen">
              <Text bold caps textColor="tertiary" target="_blank">@beefancohen</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Why React?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
