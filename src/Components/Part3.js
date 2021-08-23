import React from 'react'
import Part3Node from './Part3Node'
import RangeSlider from './RangeSlider'
import { useState } from 'react'

export default function Part3({nextPage}) {

    const [pageIndex, setPageIndex] = useState(0)
    const [finalIndex, setFinalIndex] = useState(0)

    const innerNextPage = (ans) => {
        if(pageIndex<3){
            setPageIndex(pageIndex * 2 + ans)
        }
        else if (pageIndex !== 7){
            setFinalIndex(pageIndex* 2 + ans - 7) 
            setPageIndex(7)
        } else {
            nextPage()
        }
    }

    const pages = [
                <Part3Node 
                    originalPrice={1490}
                    addPrice={520}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={400}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={640}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={340}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={460}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={575}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={705}
                    nextPage={innerNextPage}
                />,
                <RangeSlider 
                    finalIndex={finalIndex}
                    nextPage={innerNextPage}
                />
            ]

    return (
        pages[pageIndex]
    )
}