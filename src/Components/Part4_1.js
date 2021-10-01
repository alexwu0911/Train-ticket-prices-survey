import React from 'react'
export default function Part4_1({nextPage}){
    return(
        <div className="App-container">      
            <div className="form-rectangle">
                <h2>第四部分：列車種類情境選擇</h2>
                
                <p>
                    以下各項指標為自強號、普悠瑪/太魯閣、EMU3000新型城際列車提供之服務，
                    請參考以下幾項服務情境，並假設您今日要往返
                    <b><font color="red">台北-花蓮</font></b>
                    <b>，請根據以下情境，於本表最後一欄處填入您願意搭乘之列車種類。</b>
                </p>

                <div border="1">情境1台北-花蓮</div>
                <table border="7" width="100%">
                <tbody>
                <tr>
                <td width="27%">
                <p><strong>項目\列車種類</strong></p>
                </td>
                <td width="23%">
                <p><strong>一般自強號(推拉式)</strong></p>
                </td>
                <td width="25%">
                <p><strong>普悠瑪/</strong><strong>太魯閣</strong></p>
                </td>
                <td width="25%">
                <p><strong>EMU3000</strong><strong>新型城際列車</strong></p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>票價</strong></p>
                </td>
                <td>
                <p>440元</p>
                </td>
                <td>
                <p>440/480/530元</p>
                </td>
                <td>
                <p>480/530元</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>旅行時間</strong></p>
                </td>
                <td>
                <p>3小時</p>
                </td>
                <td>
                <p>2小時</p>
                </td>
                <td>
                <p>2.5小時</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>班距</strong></p>
                </td>
                <td>
                <p>每日12班</p>
                </td>
                <td>
                <p>每日13班</p>
                </td>
                <td>
                <p>每日12班</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>座位數</strong></p>
                </td>
                <td>
                <p>574</p>
                </td>
                <td>
                <p>372</p>
                </td>
                <td>
                <p>538</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>座位提供</strong><strong>USB</strong><strong>插槽及充電插座</strong></p>
                </td>
                <td>
                <p>沒提供</p>
                </td>
                <td>
                <p>每個車廂僅2個充電插座</p>
                </td>
                <td>
                <p>每個座位皆有</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>全車內免費</strong><strong>Wi-Fi</strong><strong>無線上網</strong></p>
                </td>
                <td>
                <p>╳</p>
                </td>
                <td>
                <p>╳</p>
                </td>
                <td>
                <p>〇</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>是否提供餐桌</strong></p>
                </td>
                <td>
                <p>╳</p>
                </td>
                <td>
                <p>〇</p>
                </td>
                <td>
                <p>〇</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>是否販售站票</strong></p>
                </td>
                <td>
                <p>〇</p>
                </td>
                <td>
                <p>〇(限量)/╳</p>
                </td>
                <td>
                <p>〇(限量)/╳</p>
                </td>
                </tr>
                <tr>
                <td>
                <p><strong>請擇一勾選您偏好的選擇？</strong></p>
                </td>
                <td>
                
                    <label class="radio-container4">
                    <input type="radio" name="4-1"></input>
                    <span class="checkmark4"></span>
                    </label>
                
                </td>
                <td>
                    <label class="radio-container4">
                    <input type="radio" name="4-1"></input>
                    <span class="checkmark4"></span>
                    </label>
                </td>
                <td>
                    <label class="radio-container4">
                    <input type="radio" name="4-1"></input>
                    <span class="checkmark4"></span>
                    </label>
                </td>
                </tr>
                </tbody>
                </table>
            </div>
            
            
            <div>
                <button className="button" onClick={nextPage}>下一頁</button>
            </div>
        </div>
    );
}