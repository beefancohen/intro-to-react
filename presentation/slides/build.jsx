import {
  Slide,
  Heading
} from "spectacle";
import React, { Component, PropTypes } from "react";

export default class Build extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Let's Build!
        </Heading>
      </Slide>
    );
  }
}

Build.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
