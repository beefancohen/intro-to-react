import {
  Slide,
  Heading,
  List,
  ListItem,
  CodePane
} from "spectacle";
import React, { Component, PropTypes } from "react";

export default class State extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="black">
        <Heading size={4} fit caps lineHeight={1} textColor="primary">
          State & Lifecycle
        </Heading>
        <List>
          <ListItem>Reason about your UI in isolation</ListItem>
          <ListItem>Essentially just factory functions (props => instance)</ListItem>
          <ListItem>Smart components vs dumb components (FP)</ListItem>
          <ListItem>Props are immutable</ListItem>
        </List>
        <CodePane
          lang="js"
          source={require("raw!../../assets/composition.example")}
        />
      </Slide>
    );
  }
}

State.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
