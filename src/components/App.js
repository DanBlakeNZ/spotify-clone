import React, { Component } from "react";
import Cookies from "js-cookie";

class App extends Component {
  componentDidMount() {
    let cookies = Cookies.get();
    console.log(cookies);
  }

  render() {
    return (
      <div>
        <p>App</p>
        <button>
          <a href="http://localhost:3000/login">Please login to begin</a>
        </button>
      </div>
    );
  }
}

export default App;
