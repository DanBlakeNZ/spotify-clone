import React, { Component } from "react";
import Cookies from "js-cookie";

class App extends Component {
  componentDidMount() {
    let cookies = Cookies.get();
    console.log(cookies.accessToken);
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
