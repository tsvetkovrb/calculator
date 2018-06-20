import React, { Component } from "react";
import { connect } from "react-redux";

import { Operations } from "./redux/ducks/calculator/types";
import Button from "./Components/Button";
import BackgroundNight from "./Components/Background";
import { calculatorPressButtonAction } from "./redux/ducks/calculator/actions";

import "./Calculator.css";

/**
 * Вынесли возможные состояния
 * калькулятора в константы,
 * чтобы не опечататься и
 * изменить их на любое значение
 * в любой момент
 */

class Calculator extends Component {
  render() {
    // Используем spread operator чтобы извлечь переменные состояния
    const { value1, value2, operation } = this.props;

    return (
      <div className="calculator">
        <div className="wrap">
          <div className="calculator__screen">
            <div className="value">
              {/*
                Если операция не выбрана - выводим первое число,
                а если выбрана, значит выводим второе
              */}
              {operation === Operations.NONE ? value1 || 0 : value2 || 0}
            </div>
            <div className="operation">{operation}</div>
          </div>
          <div className="calculator__wrap">
            <Button symbol="7" onClick={this.handleClickButton} />
            <Button symbol="8" onClick={this.handleClickButton} />
            <Button symbol="9" onClick={this.handleClickButton} />
            <Button symbol="/" onClick={this.handleClickButton} />
            <Button symbol="4" onClick={this.handleClickButton} />
            <Button symbol="5" onClick={this.handleClickButton} />
            <Button symbol="6" onClick={this.handleClickButton} />
            <Button symbol="*" onClick={this.handleClickButton} />
            <Button symbol="1" onClick={this.handleClickButton} />
            <Button symbol="2" onClick={this.handleClickButton} />
            <Button symbol="3" onClick={this.handleClickButton} />
            <Button symbol="+" onClick={this.handleClickButton} />
            <Button symbol="C" onClick={this.handleClickButton} />
            <Button symbol="0" onClick={this.handleClickButton} />
            <Button symbol="=" onClick={this.handleClickButton} />
            <Button symbol="-" onClick={this.handleClickButton} />
          </div>
        </div>
      </div>
    );
  }

  handleClickButton = button => {
    this.props.dispatchPressButtonAction(button);
  };
}

const mapStateToProps = state => ({
  ...state.calculator
});

const mapDispatchToProps = dispatch => ({
  dispatchPressButtonAction(button) {
    dispatch(calculatorPressButtonAction(button));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
