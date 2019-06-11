import React, { Component } from "react";
import "../style/App.css";
import CheckTemplateContainer from "../containers/CheckTemplateContainer";
import UserContainer from "../containers/UserContainer";

class App extends Component {
  render() {
    return (
      <div className="row">
        <CheckTemplateContainer />
        {/*<UserContainer />*/}
      </div>
    );
  }
}

export default App;
