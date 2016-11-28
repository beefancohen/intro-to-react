import {
  Slide,
  List,
  ListItem,
  Heading,
  Link
} from "spectacle";
import React, { Component, PropTypes } from "react";

export default class Prereqs extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="secondary">
        <Heading size={4} fit caps lineHeight={1} textColor="primary">
          Prerequisites
        </Heading>
        <List textColor="quarternary">
          <ListItem>Node v6.x</ListItem>
          <ListItem>
            NPM v3.x <small>(should come preinstalled with Node)</small>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/facebookincubator/create-react-app" textColor="#008951">
              create-react-app
            </Link> CLI
          </ListItem>
        </List>
      </Slide>
    );
  }
}

Prereqs.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
