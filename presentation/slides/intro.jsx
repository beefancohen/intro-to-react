import {
  Slide,
  Link,
  Heading,
  Text
} from "spectacle";
import React, { Component, PropTypes } from "react";

export default class Intro extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="primary">
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
    );
  }
}

Intro.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
