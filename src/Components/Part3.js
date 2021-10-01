import React, { useState }  from 'react'
import Part3Node from './Part3Node'
import RangeSlider from './RangeSlider'

export default function Part3({nextPage}) {
    const originalPrice = 1490
    const prices = [520, 400, 640, 340, 460, 575, 705]

    const [priceIndex, setPriceIndex] = useState(0)
    const [page, setPage] = useState('Part3Node')
    const [maxVal, setMaxVal] = useState(Math.max(...prices) + 1000)
    const [minVal, setMinVal] = useState(0)

    const innerNextPage = (ans) => {
        let nextPriceIndex = 0
        
        if(ans === 1) {
            setMaxVal(prices[priceIndex])
        } else {
            setMinVal(prices[priceIndex])
        }
        
        if(priceIndex < 3){
            nextPriceIndex = priceIndex * 2 + ans
        } else {
            setPage('RangeSlider')
        }
        
        setPriceIndex(nextPriceIndex)
    }

    return (
        page === 'Part3Node' ?
        <Part3Node 
            originalPrice={originalPrice}
            addPrice={prices[priceIndex]}
            nextPage={innerNextPage}
        /> :
        <RangeSlider 
            maxVal={originalPrice + maxVal - 1}
            minVal={originalPrice + minVal}
            nextPage={nextPage}
        />
    )
}