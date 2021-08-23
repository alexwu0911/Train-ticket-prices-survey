import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {},
      textDisabled: true,
      text: "",
    };
  }

  componentDidMount() {
    const options = this.props.options;
    options.map((option) => 
      this.setState(state => ({
        answer: {
          ...state.answer,
          [option]: !!state.answer[option]
        }
      })))
  };

  onChangeAnswer = e => {
    const key = e.target.value
    this.setState(change => ({
      answer: {
        ...change.answer,
        [key]: !change.answer[key]
      }
    })) 
    if (key === "其他" && !this.state.answer[key]) {
      this.setState({textDisabled: false});
    }
    else if (key === "其他" && this.state.answer[key]) {
      this.setState({textDisabled: true});
    }

  };

  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleOthers (option) {
    const normal =
    <label className="radio-container" key = {option.toString()}>{option}
      <input
      type = "checkbox"
      value = {option}
      checked={this.state.answer[{option}]}
      onChange={this.onChangeAnswer}
      />
      <span className="checkmark"></span>
    </label>

    const others = 
      <label className="radio-container" key = {option.toString()}>{option}
        <input
        type = "checkbox"
        value = {option}
        checked={this.state.answer[{option}]}
        onChange={this.onChangeAnswer}
        />
        <span className="checkmark"></span>
        <input id="text-input" type="text" disabled={this.state.textDisabled} value={this.state.text} onChange={this.onChangeText} />
      </label>

    if (option === "其他") {
      return others;
    }
    return normal;
  }

  optionList() {
    const options = this.props.options;   
    const listOptions = options.map((option) => this.handleOthers(option));
    return(
      listOptions
    );
  };

  render() {
    return (
      <div>{this.optionList()}</div>
    );
  }
}