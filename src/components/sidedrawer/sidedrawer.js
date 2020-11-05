import React from "react";
import { Nav, NavItem, NavLink,InputGroup } from "shards-react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";

export default class DropdownThemeExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render() {
    return (
        <Nav style={{background:"#E9ECEF"}}>
        <NavItem>
        <Dropdown open={this.state.open} toggle={this.toggle}>
          <DropdownToggle theme="light">Select Menu</DropdownToggle>
          <DropdownMenu >
            <DropdownItem>Classes</DropdownItem>
            <DropdownItem>Attendance Report</DropdownItem>
            <DropdownItem>Are you visible</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </NavItem>
      </Nav>
    );
  }
}
