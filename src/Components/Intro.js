import React from 'react'

export default function Intro({nextPage}) {
    return (
      <div className="App-container">
        <h1>台鐵價格調整問卷</h1>
        <div className="description-rectangle">
          <div className="description">
            親愛的旅客，您好！
            <br/><br/>
            這是一份乘坐台灣高鐵對於車廂加價升等之願付價格研究問卷，目的在於瞭解旅客對艙等升級的加價金額可接受程度，以及假設未來台灣高鐵若推出乘車後加價升等至商務艙方案，可提供相關內容參考。本問卷調查採匿名的方式，內容僅作為學術研究使用，絕無其他用途造成資料外洩，敬請安心填寫，感謝您的熱情支持與協助！敬祝  平安快樂，萬事如意！
            <br/><br/>
            真理大學觀光數位知識學系
          </div>
        </div>
        <div>
          <button className="button" onClick={nextPage}>下一頁</button>
        </div>
      </div>
    )
}
