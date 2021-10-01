import React from 'react'
import { useState } from 'react'
import ds from '../Modules/DataSource'

export default function RangeSlider({minVal, maxVal, nextPage}){

    const [val,setVal]=useState(parseInt(minVal, 10))

    const updateVal = e => {
        setVal(parseInt(e.target.value,10))
    }
       
    const handleOnClick = () => {
        ds.set({final: val})
        console.log(ds.get())
        ds.clear()
        nextPage()
    }

    return (        
        <div className="container">
                <div className="header">第三部分：詢價金額</div>
                <div className="body">
                    <div className="title">
                        您的選擇區間為:{minVal}~{maxVal}<br></br>
                    </div>
                    <div className="content">
                        請選擇您認為合理的金額
                        <input type="range" min={minVal} max={maxVal} value={val} onChange={updateVal} className="slider" id="myRange"/>
                        <br></br>
                        {val}
                    </div>
                </div>
                <div className="footer">
                    <div className="button" onClick={handleOnClick}>完成送出</div>
                </div>
        </div>
    )
}

