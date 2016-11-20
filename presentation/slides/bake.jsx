import {
  Slide,
  Heading,
  Text,
  Image
} from "spectacle";
import React, { PropTypes, Component } from "react";

export default class Bake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDoneBaking: false
    };

    this.bake = this.bake.bind(this);
    this.eat = this.eat.bind(this);
  }

  bake() {
    this.setState({
      isDoneBaking: true
    });
  }

  eat() {
    this.setState({
      isDoneBaking: false
    });
  }

  render() {
    const {
      pumpkinPie,
      applePie,
      transition,
      type
    } = this.props;

    const {
      isDoneBaking
    } = this.state;

    const imageSource = type === "Pumpkin" ? pumpkinPie : applePie;
    const buttonClick = isDoneBaking ? this.eat : this.bake;

    return (
      <Slide transition={transition} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          In Action!
        </Heading>
        <br />
        <button onClick={buttonClick}>
          <Text textColor="black">
            { isDoneBaking ? "Eat!" : "Bake!" }
          </Text>
        </button>
        {
          isDoneBaking ?
            <Image
              display="block"
              height="300px"
              width="300px"
              src={imageSource}
            /> :
          null
        }
      </Slide>
    );
  }
}

Bake.propTypes = {
  pumpkinPie: PropTypes.any.isRequired,
  applePie: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["Pumpkin", "Apple"]),
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};

Bake.defaultProps = {
  type: "Pumpkin"
};
