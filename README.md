# Movie Client With GraphQL

Client for the MovieQL-API built with Apollo



## SETUP

`npx create-react-app [ProjectName]`

```javascript
// src/App.js
import React, { Component } from "react";

class App extends Component {
  render() {
    return <div className="App" />;
  }
}

export default App;
```

```javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

외에 파일전부 지우기

`yarn add react-router-dom apollo-boost react-apollo graphql-tag graphql --save`

- Apollo Boost 는 GraphQL을 위한 Client 를 가지기 위해 셋업을 자동화 (Create Simple Client)

`yarn add react-helmet`

















