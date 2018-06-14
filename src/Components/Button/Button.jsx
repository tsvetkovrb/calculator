import React from "react";

import "./Button.css";

export default ({ symbol, onClick }) => (
  <div className="button" onClick={event => onClick(event.target.innerText)}>{symbol}</div>
)