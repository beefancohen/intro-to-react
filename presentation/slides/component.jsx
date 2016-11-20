import CodeSlide from "spectacle-code-slide";
import React, { PropTypes, Component } from "react";

export default class ComponentSlide extends Component {
  render() {
    const {
      transition,
      slideIndex,
      magic
    } = this.props;

    return (
      <CodeSlide
        transition={transition}
        lang="js"
        slideIndex={slideIndex}
        code={require("raw!../../assets/component.example")}
        ranges={[
          { loc: [0, 3], title: "🎂 Baking With React 🎂" },
          { loc: [0, 1], note: "First, let's import React." },
          { loc: [2, 3], note: "You can define a component by extending the default React component." },
          { loc: [3, 11], note: "TYPES?! This is React's version of type checking for components."},
          { loc: [11, 21] },
          { loc: [14, 18], note: "Components can maintain their own state. When state and/or props change, the component gets 're-rendered.'" },
          { loc: [21, 25] },
          { loc: [36, 53] },
          { loc: [43, 44], note: "This is just syntactic sugar. JSX transpiles to just a function call!" },
          { loc: [26, 35], note: "This will (probably) trigger a re-render!" },
          { loc: [44, 49] },
          { loc: [44, 49], image: magic }
        ]}
      />
    );
  }
}

ComponentSlide.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired,
  slideIndex: PropTypes.string.isRequired,
  magic: PropTypes.any.isRequired
};
