import {
  Slide,
  Heading,
  List,
  ListItem,
  CodePane,
  Link,
  Layout,
  Fit,
  Fill
} from "spectacle";
import React, { Component, PropTypes } from "react";


const TEXT_SIZE = 36;
export default class Events extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="tertiary">
        <Heading size={5} fit caps lineHeight={1} textColor="primary">
          Event Handling
        </Heading>
        <Layout>
          <Fill>
            <List textColor="black">
              <ListItem textSize={TEXT_SIZE}>Events bubble up from low-level DOM elements</ListItem>
              <ListItem textSize={TEXT_SIZE}>Pass in a function to the handler</ListItem>
              <ListItem textSize={TEXT_SIZE}>
                Common handlers: onClick, onChange, onFocus, onBlur,&nbsp;
                <Link href="https://facebook.github.io/react/docs/events.html" textColor="primary" target="_blank">
                  etc.
                </Link>
              </ListItem>
            </List>
          </Fill>
          <Fit>
            <CodePane
              lang="jsx"
              source={require("raw!../../assets/events.example")}
            />
          </Fit>
        </Layout>
      </Slide>
    );
  }
}

Events.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
