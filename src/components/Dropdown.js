import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { useState } from "react";

// import React from "react";
// import {
//   DropdownWrapper,
//   StyledSelect,
//   StyledOption,
//   StyledLabel,
//   StyledButton
// } from "./styles.js";

// export function Dropdown(props) {
//   return (
//     <DropdownWrapper action={props.action} onChange={props.onChange}>
//       <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
//       <StyledSelect id="services" name="services">
//         {props.children}
//       </StyledSelect>
//       <StyledButton type="submit" value={props.buttonText} />
//     </DropdownWrapper>
//   );
// }

// export function Option(props) {
//   return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
// }




function FormDropdown() {
    return (
        <div className="App container">
        <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Distance"
                  className="d-inline mx-2"
                  onSelect={handleDistance}>
                  <Dropdown.Item eventKey="A">Short Distance</Dropdown.Item>
                  <Dropdown.Item eventKey="B">Medium Distance</Dropdown.Item>
                  <Dropdown.Item eventKey="C">Long Distance</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Direction"
                  className="d-inline mx-2"
                  onSelect={handleDirection}
                  >
                  <Dropdown.Item eventKey="A">Left</Dropdown.Item>
                  <Dropdown.Item eventKey="B">Forward</Dropdown.Item>
                  <Dropdown.Item eventKey="C">Right</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Time"
                  className="d-inline mx-2"
                  onSelect={handleTime}
                  >
                  <Dropdown.Item eventKey="A">10 Min.</Dropdown.Item>
                  <Dropdown.Item eventKey="B">20 Min.</Dropdown.Item>
                  <Dropdown.Item eventKey="C">30 Min.</Dropdown.Item>
                  {/* href="#/action-1" href="#/action-2" href="#/action-3" */}
              </DropdownButton>
              <h4>Distance: {distance}</h4>
        <h4>Direction: {direction}</h4>
        <h4>Time: {time} minutes</h4>
      </div>

    );
}

export default FormDropdown;