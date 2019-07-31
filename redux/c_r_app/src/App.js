import React from "react";
import "./App.css";

import { Provider } from "react";
import store from "./store";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <section>
          <div>{11}</div>
          <div>{22}</div>
          <div>{33}</div>
        </section>
      </Provider>
    );
  }
}

export default App;
