import {
  Slide,
  List,
  ListItem,
  Image,
  Heading,
  Text
} from "spectacle";
import React, { PropTypes, Component } from "react";

export default class WhyReact extends Component {
  render() {
    const {
      logo,
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Why React?
        </Heading>
        <Image src={logo} className="React-logo" />
        <List>
          <Text bold textColor="primary">
            <ListItem>Performance</ListItem>
            <ListItem>Composable Components</ListItem>
            <ListItem>Simplicity</ListItem>
            <ListItem>Write once, run anywhere</ListItem>
            <ListItem>Tooling/Community</ListItem>
          </Text>
        </List>
      </Slide>
    );
  }
}

WhyReact.propTypes = {
  logo: PropTypes.any.isRequired,
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
