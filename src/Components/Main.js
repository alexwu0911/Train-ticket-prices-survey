import React from 'react'
import Intro from './Intro'
import Part1 from './Part1'
import Part3 from './Part3'
import { useState } from 'react'

export default function Main() {
    const [pageIndex, setPageIndex] = useState(0)

    const nextPage = () => {
        const nextIndex = (pageIndex+1) % pages.length
        setPageIndex(nextIndex)
    }

    const pages = [
        <Intro 
            nextPage={nextPage}
        />,
        <Part1 
            nextPage={nextPage}
        />,
        <Part3 
            nextPage={nextPage}
        />
    ]
    return (
        pages[pageIndex]
    )
}