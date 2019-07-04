import React, { Component } from "react";
import Cookies from "js-cookie";

class App extends Component {
  componentDidMount() {
    let cookies = Cookies.get();
    let refreshToken = cookies.refreshToken;

    fetch(`http://localhost:3000/refresh_token?refreshToken=${refreshToken}`)
      .then(response => response.json())
      .then(data => console.log(data));
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
