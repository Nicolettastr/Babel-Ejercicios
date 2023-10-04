import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import '../styles/scrollToTop.css'

const ScrollOnTop = ({
    children
}) => {

    const [scrollTop, setScrollTop] = useState(0)
    const scrollContainerRef = useRef(null)

    const handleOnScroll = (event) => {
        setScrollTop(event.target.scrollTop)
    }
  
    const handleScrollToTop = () => {
        return scrollContainerRef.current.scrollTop = 0
    }

    console.log(scrollTop)

    const scrollToTopPosition = parseInt(scrollTop)

  return (
    <div ref={scrollContainerRef} className='scrollContainer' onScroll={handleOnScroll}>
        {children}
        <Button 
            className={'scrollToTop_position scrollToTop_Button secondary'} 
            buttonName={scrollToTopPosition}/>
        {scrollTop >= 1000 ? 
            <Button 
                className={'scrollToTop_Button principal'} 
                buttonName={'Scroll to top'}
                onclick={handleScrollToTop}/>
            
        : '' }
    </div>
  )
}

export default ScrollOnTop