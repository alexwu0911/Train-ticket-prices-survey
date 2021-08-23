import React from 'react'
import Radio from "./Radio";
import Checkbox from "./Checkbox";

export default function Part1({nextPage}){
    const Q1 = {
        question: "1.	請問您此次行程之目的是：",
        options: ["上班", "上學", "返鄉", "購物", "社交", "娛樂", "就醫"]
    };
    const Q2 = {
        question: "2.	請問您一個月內搭乘高鐵的次數為(單程次數)：",
        options: ["1~3", "4~6", "7~10", "11次(含)以上"]
    };
    const Q3 = {
        question: "3.	此次搭乘的艙等為：",
        options: ["商務車廂", "商務車廂(信用卡升級)", "標準車廂(跳答第五題)", "自由座(跳答第五題)"]
    };
    const Q4 = {
        question: "4.	乘坐商務艙之原因為?(可複選)：",
        options: ["車廂舒適度", "信用卡相關優惠", "安靜閱讀環境", "免費茶點", "多元的辦公設備(電源插座、閱讀燈)", "其他"]
    }
    const Q5 = {
        question: "5.	請問此次您搭乘高鐵的費用支付方式為：", 
        options: ["自費", "公司全額補助", "公司部分補助", "其他"]
    }

    return (
        <div className="App-container">
          <div className="form-rectangle">
            <h2>第一部分：旅次特性</h2>
            <div className="form-content">
              <div className="questions">{Q1.question}</div>
              <Radio options={Q1.options}/>
              <div className="questions">{Q2.question}</div>
              <Radio options={Q2.options}/>
              <div className="questions">{Q3.question}</div>
              <Radio options={Q3.options}/>
              <div className="questions">{Q4.question}</div>
              <Checkbox options={Q4.options}/>
              <div className="questions">{Q5.question}</div>
              <Radio options={Q5.options}/>
              <div>
              </div>
            </div>
          </div>
          <div>
            <button className="button" onClick={nextPage}>下一頁</button>
          </div>
        </div>
      );

    
}