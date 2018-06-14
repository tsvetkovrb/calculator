import React, { Component } from 'react';

import Button from "./Components/Button";

import './Calculator.css';

/**
 * Вынесли возможные состояния
 * калькулятора в константы,
 * чтобы не опечататься и
 * изменить их на любое значение
 * в любой момент
 */

const OPERATIONS = {
  SUM: "+",
  SUBTRACTION: "-",
  MULTIPLICATION: "*",
  DIVISION: "/",
  NONE: ""
}

export default class Calculator extends Component {

  /**
   * При создании компонента через класс,
   * у него появляется объект state и функция setState
   * которые отвечают за состояние компонента
   */

  state = {
    value1: "",
    value2: "",
    operation: OPERATIONS.NONE
  }

  render() {
    // Используем spread operator чтобы извлечь переменные состояния
    const { value1, value2, operation } = this.state;

    return (
      <div className="calculator">
        <div className="wrap">
          <div className="calculator__screen">
            <div className="value">
              {/*
                Если операция не выбрана - выводим первое число,
                а если выбрана, значит выводим второе
              */}
              {operation === OPERATIONS.NONE ? value1 : value2}
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

  handleClickButton = symbol => {
    /**
     * ВНИМАНИЕ! ГОВНОКОД!
     */

    const value = parseInt(symbol);

    if (!isNaN(value)) { // Если символ - число, то...

      if (this.state.operation === OPERATIONS.NONE) { // Если текущая операция не выбрана,
        this.setState(state => ({ value1: state.value1 + symbol })); // приклеиваем символ в конец первого числа
      } else { // Ну а если операция указана,
        this.setState(state => ({ value2: state.value2 + symbol })); // значит приклеиваем ко второму
      }

    } else { // Ну а есои символ - не число,

      switch (symbol) {
        case "C": // Если С - сбросить все
          return this.setState({
            value1: "",
            value2: "",
            operation: OPERATIONS.NONE
          });
        case "+": // Пользователь нажал Сложить
          return this.setState({ operation: OPERATIONS.SUM });
        case "-": // Пользователь нажал Вычесть
          return this.setState({ operation: OPERATIONS.SUBTRACTION });
        case "/": // Пользователь нажал Поделить
          return this.setState({ operation: OPERATIONS.DIVISION });
        case "*": // Пользователь нажал Умножить
          return this.setState({ operation: OPERATIONS.MULTIPLICATION });
        case "=": // Пользователь нажал "=" (равно)
          switch (this.state.operation) { // Смотрим какая сейчас операция
            case OPERATIONS.SUM: // Если сумма - складываем
              return this.setState(state => ({
                operation: OPERATIONS.NONE, // И сбрасываем операцию
                value1: parseInt(state.value1) + parseInt(state.value2),
                value2: ""
              }));
            case OPERATIONS.SUBTRACTION: // Если вычитание - вычетаем
              return this.setState(state => ({
                operation: OPERATIONS.NONE, // И сбрасываем операцию
                value1: parseInt(state.value1) - parseInt(state.value2),
                value2: ""
              }));
            case OPERATIONS.MULTIPLICATION: // Если умножение - умножаем
              return this.setState(state => ({
                operation: OPERATIONS.NONE, // И сбрасываем операцию
                value1: parseInt(state.value1) * parseInt(state.value2),
                value2: ""
              }));
            case OPERATIONS.DIVISION: // Если деление - делим
              return this.setState(state => ({
                operation: OPERATIONS.NONE, // И сбрасываем операцию
                value1: parseInt(state.value1) / parseInt(state.value2),
                value2: ""
              }));
            // Реакт требует чтобы в свитчах был default
            default:
              break;
          }
        default: // Пользователь нажал на какую-то не обработанную кнопку
          return this.setState({ operation: OPERATIONS.NONE });
      }

    }
  }
}

