import {
  Slide,
  Heading,
  Table,
  TableRow,
  TableItem,
  TableHeaderItem
} from "spectacle";
import React, { Component, PropTypes } from "react";

const TEXT_SIZE = 30;

const RENDER_COLOR = "#008951";
const SIDE_EFFECT_COLOR = "#ffad1f";
const RETURN_COLOR = "#005fd1";

export default class State extends Component {
  render() {
    const {
      transition
    } = this.props;

    return (
      <Slide transition={transition} bgColor="secondary">
        <Heading size={4} fit caps lineHeight={1} textColor="quarternary">
          State & Lifecycle
        </Heading>
        <br />
        <br />
        <Table textColor="black">
          <tbody>
            <TableRow>
              <TableHeaderItem>Initialization</TableHeaderItem>
              <TableHeaderItem>Update</TableHeaderItem>
              <TableHeaderItem>Destruction</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem textSize={TEXT_SIZE} textColor={RETURN_COLOR}>getInitialState()</TableItem>
              <TableItem textSize={TEXT_SIZE} textColor={SIDE_EFFECT_COLOR}>componentWillReceiveProps()</TableItem>
              <TableItem textSize={TEXT_SIZE} textColor={SIDE_EFFECT_COLOR}>componentWillUnmount()</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize={TEXT_SIZE} textColor={RETURN_COLOR}>getDefaultProps()</TableItem>
              <TableItem textSize={TEXT_SIZE} textColor={RETURN_COLOR}>shouldComponentUpdate()</TableItem>
              <TableItem />
            </TableRow>
            <br />
            <TableRow>
              <TableItem textSize={TEXT_SIZE} textColor={SIDE_EFFECT_COLOR}>componentWillMount()</TableItem>
              <TableItem textSize={TEXT_SIZE} textColor={SIDE_EFFECT_COLOR}>componentWillUpdate()</TableItem>
              <TableItem />
            </TableRow>
            <TableRow>
              <TableItem textSize={TEXT_SIZE} textColor={RENDER_COLOR}>render()</TableItem>
              <TableItem textSize={TEXT_SIZE} textColor={RENDER_COLOR}>render()</TableItem>
              <TableItem />
            </TableRow>
            <TableRow>
              <TableItem textSize={TEXT_SIZE} textColor={SIDE_EFFECT_COLOR}>componentDidMount()</TableItem>
              <TableItem textSize={TEXT_SIZE} textColor={SIDE_EFFECT_COLOR}>componentDidUpdate()</TableItem>
              <TableItem />
            </TableRow>
          </tbody>
        </Table>
      </Slide>
    );
  }
}

State.propTypes = {
  transition: PropTypes.arrayOf(PropTypes.string).isRequired
};
