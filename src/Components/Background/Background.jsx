import React, { Component } from "react";
import { connect } from "react-redux";

import { backgroundToggleAction } from "../../redux/ducks/background/actions";

import "./Background.css";

class Background extends Component {
  handleClick = () => {
    this.props.dispatchBackgroundToggleAction();
  };

  render() {
    const { enabled } = this.props;
    return (
      <div className="wrap">
        <div
          className={`background-night ${
            enabled ? "background-night_enabled" : ""
          }`}
        />
        <button className="background-night__button" onClick={this.handleClick}>
          {enabled ? "День" : "Ночь"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.background
});

const mapDispatchToProps = dispatch => ({
  dispatchBackgroundToggleAction() {
    dispatch(backgroundToggleAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Background);
