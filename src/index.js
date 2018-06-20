import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import BackgroundNight from "./Components/Background";
import Calculator from "./Calculator";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BackgroundNight />
      <Calculator />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
