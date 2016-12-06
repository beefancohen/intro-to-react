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

export default class FirstStep extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="primary">
        <Heading size={4} fit caps lineHeight={1} textColor="tertiary">
          First steps
        </Heading>
        <List textColor="quarternary">
          <ListItem>create-react-app intro-to-react</ListItem>
          <ListItem>cd intro-to-react</ListItem>
          <ListItem>npm install superagent classnames</ListItem>
          <ListItem style={INDENT_STYLE}>
            <small>superagent to make AJAX requests</small>
          </ListItem>
          <ListItem style={INDENT_STYLE}>
            <small>classnames allows you to conditionally apply CSS classes to DOM elements</small>
          </ListItem>
          <ListItem>npm start</ListItem>
        </List>
      </Slide>
    );
  }
}

FirstStep.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
