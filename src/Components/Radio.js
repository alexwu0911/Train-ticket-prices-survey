import React, { useState } from "react";

export default function Radio(props) {
  const [answer, setAnswer] = useState('');
  const [text, setText] = useState('');
  const [textDisabled, setTextDisabled] = useState(true);
  const options = props.options;

  const onChangeAnswer = e => {
    setAnswer(e.target.value);
    setTextDisabled(!(e.target.value === "其他"));
    props.setAnswer(e.target.id)
  };

  const onChangeText = e => {
    setText(e.target.value);
  };
    
  return(
    options.map((option, i) => 
    <label className="radio-container" key = {option.toString()}>{option}
      <input
      type = "radio"
      value = {option}
      id = {i+1}
      onChange = {(e)=> onChangeAnswer(e)}
      checked = {answer === option}
      />
      {
        option === "其他" ?
        <input 
        id={"radio-text-input" + (i+1)} 
        type="text" 
        disabled={textDisabled} 
        value={text} 
        onChange={(e)=> onChangeText(e)} />
      :''}
      <span className="checkmark"></span>
    </label>
  ))
}