import CodeSlide from "spectacle-code-slide";
import React, { PropTypes, Component } from "react";

export default class ComponentSlide extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <CodeSlide
        transition={transition}
        lang="js"
        code={require("raw!../../assets/component.example")}
        ranges={[
          { loc: [0, 3], title: "Ryan's Apple Pie" },
          { loc: [1, 2] },
          { loc: [1, 2], note: "Heres a note!" },
          { loc: [2, 3] },
          { loc: [4, 7] },
          { loc: [8, 10] }
        ]}
      />
    );
  }
}

ComponentSlide.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
