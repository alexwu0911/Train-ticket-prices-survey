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
    options.map((option, i) => 
      this.setState(state => ({
        answer: {
          ...state.answer,
          [i+1]: !!state.answer[i+1]
        }
      })))
  };

  onChangeAnswer = e => {
    const {value: key, id} = e.target
    this.setState(change => ({
      answer: {
        ...change.answer,
        [id]: !change.answer[id]
      }
    }), () => {
      const {answer} = this.state
      this.props.setAnswer(Object.keys(answer).filter(i => answer[i]))
      if (key === "其他") {
        this.setState({textDisabled: !answer[id]});
      }
    }) 
  };

  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };


  render() {
    const options = this.props.options;

    return (
      options.map((option, i) => 
      <label className="radio-container" key = {option.toString()}>{option}
        <input
        type = "checkbox"
        value = {option}
        id = {i+1}
        checked={this.state.answer[{i}+1]}
        onChange={this.onChangeAnswer}
        />
        <span className="checkmark"></span>
        {
          option === "其他" ?
          <input 
          id={"checkbox-text-input" + (i+1)} 
          type="text" 
          disabled={this.state.textDisabled} 
          value={this.state.text} 
          onChange={this.onChangeText} />
        :''}
      </label>
    ));
  }
}