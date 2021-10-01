import React, {useState, useEffect} from 'react'
import ds from '../Modules/DataSource'

export default function Part3Node({originalPrice, addPrice, nextPage}) {

    const [isVisible, setIsVisible] = useState(false)
    
    const handleOnClick = (ans) => () => {
        let { Part3 } = ds.get()
        Part3 = Part3 || []
        Part3.push(ans)
        ds.set({Part3})
        setIsVisible(v => !v)
        nextPage(ans)
    }

    useEffect(() => {
        setIsVisible(v => !v)
    }, [originalPrice, addPrice])
    
    return (
        <div className="container">
            <div className="header">第三部分：詢價金額</div>
            <div className="body">
                <div className="box">
                    <div className="title">目前票價：{originalPrice}</div>
                    {isVisible ? 
                        <div className="content">
                            +{addPrice}<br></br><span>={originalPrice + addPrice}</span>
                        </div> : ''
                    }
                </div>
            </div>
            <div className="footer">
                <div 
                    className="button"
                    onClick={handleOnClick(1)}
                >
                    NO
                </div>
                <div 
                    className="button"
                    onClick={handleOnClick(2)}
                >
                    YES
                </div>
            </div>
        </div>
    )
}