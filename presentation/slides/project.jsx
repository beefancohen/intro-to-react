import {
  Slide,
  Heading,
  List,
  ListItem
} from "spectacle";
import React, { Component, PropTypes } from "react";

const INDENT_STYLE = {
  paddingLeft: "50px"
};

export default class Intro extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="quarternary">
        <Heading size={5} caps lineHeight={1} textColor="white">
          Project
        </Heading>
        <Heading size={6} fit caps lineHeight={1} textColor="white">
          Github Issue Viewer
        </Heading>
        <List textColor="black">
          <ListItem>Fetch issues from https://api.github.com/repos/facebook/react/issues</ListItem>
          <ListItem>Render a list of issues</ListItem>
          <ListItem>Toggle between closed/open issues</ListItem>
        </List>
      </Slide>
    );
  }
}

Intro.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
