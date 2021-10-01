import React from 'react'
import Radio from './Radio'
import Checkbox from './Checkbox'

function Question({question, options, multiSelect, setAnswer}) {
    return (
        <div>
            <div className="questions">{question}</div>
            {multiSelect ? <Checkbox options={options} setAnswer={setAnswer}/> : <Radio options={options} setAnswer={setAnswer}/>}
        </div>
    )
}

export default Question
