import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/accesstoken", {
      method: "GET"
    })
      .then(res => {
        console.log(res);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <p>App</p>
        <button>Please login to begin</button>
      </div>
    );
  }
}

export default App;
