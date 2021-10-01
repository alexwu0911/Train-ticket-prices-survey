import React from 'react'
import Question from './Question';
import ds from '../Modules/DataSource'

export default function Part1({nextPage}){
    let part1Answer = {
        1:'', 2:'', 3:'', 4:'', 5:''
    }

    const setAnswer = (qIndex) => (ans) => {
        part1Answer = {
            ...part1Answer,
            [qIndex]: ans
        }
    }

    const handleOnClick = () => {
        let errorMessage = "";

        questions.forEach(function(q, i) {
            {q.required ? 
                {...part1Answer[i+1] === "" ? 
                    errorMessage += ("第" + (i+1) + "題為必填！\n")
                : ''} 
            : ''}
        });
        handlePage(errorMessage)
    }

    const handlePage = (errorMessage) => {
        console.log(part1Answer) 
        ds.set({Part1: part1Answer})

        errorMessage === "" ?
        nextPage()
        : alert(errorMessage)
    }

    const questions = [
        {
            question: "請問您此次行程之目的是：",
            options: ["上班", "上學", "返鄉", "購物", "社交", "娛樂", "就醫"],
            multiSelect: false,
            required: true
        },
        {
            question: "請問您一個月內搭乘高鐵的次數為(單程次數)：",
            options: ["1~3", "4~6", "7~10", "11次(含)以上"],
            multiSelect: false,
            required: true
        },
        {
            question: "此次搭乘的艙等為：",
            options: ["商務車廂", "商務車廂(信用卡升級)", "標準車廂(跳答第五題)", "自由座(跳答第五題)"],
            multiSelect: false,
            required: true
        },
        {
            question: "乘坐商務艙之原因為?(可複選)：",
            options: ["車廂舒適度", "信用卡相關優惠", "安靜閱讀環境", "免費茶點", "多元的辦公設備(電源插座、閱讀燈)", "其他"],
            multiSelect: true,
            required: true
        },
        {
            question: "請問此次您搭乘高鐵的費用支付方式為：", 
            options: ["自費", "公司全額補助", "公司部分補助", "其他"],
            multiSelect: false,
            required: true
        }
    ]

    return (
        <div className="App-container">
            <div className="form-rectangle">
                <h2>第一部分：旅次特性</h2>
                <div className="form-content">
                    {
                        questions.map((q, i) => 
                            <Question 
                                key={i+1}
                                question={(i+1) + '. ' + q.question }
                                options={q.options}
                                multiSelect={q.multiSelect}
                                setAnswer={setAnswer(i+1)}
                            />
                        )
                    }
                </div>
            </div>
            <div>
                <button className="button" onClick={handleOnClick}>下一頁</button>
            </div>
        </div>
    );

    
}