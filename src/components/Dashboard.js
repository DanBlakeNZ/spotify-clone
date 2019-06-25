import React, { Component } from "react";
import queryString from "query-string";

class Dashboard extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed);
  }

  render() {
    return (
      <div>
        <p>I'm the dashboard</p>
      </div>
    );
  }
}

export default Dashboard;
