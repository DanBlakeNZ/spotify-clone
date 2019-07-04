import React, { Component } from "react";
import Cookies from "js-cookie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      refreshToken: null,
      loading: true
    };
  }

  componentDidMount() {
    let { refreshToken, accessToken } = Cookies.get();

    if ((refreshToken, accessToken)) {
      this.setState({
        accessToken: accessToken,
        refreshToken: refreshToken
      });
    }

    if (refreshToken) {
      fetch(`http://localhost:3000/refresh_token?refreshToken=${refreshToken}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            accessToken: data.access_token,
            refreshToken: refreshToken,
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  handleLogOut = () => {
    var win = window.open(
      "https://www.spotify.com/logout",
      "_blank",
      "width=5",
      "height=10"
    );
    setTimeout(function() {
      win.close();
    }, 500);
    Cookies.set("refreshToken", "");
    Cookies.set("accessToken", "");
    this.setState({
      accessToken: null,
      refreshToken: null
    });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <p>App</p>
            {this.state.accessToken ? (
              <button onClick={this.handleLogOut}>Logout</button>
            ) : (
              <button>
                <a href="http://localhost:3000/login">Please login to begin</a>
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
