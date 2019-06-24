import React, { Component } from "react";
import styled from "styled-components";

let PropsContainer = styled.p`
  color: red;
`;

class test extends Component {
  render() {
    return (
      <div>
        <p>I'm a test component.</p>
        <PropsContainer>{this.props.text}</PropsContainer>
      </div>
    );
  }
}

export default test;
