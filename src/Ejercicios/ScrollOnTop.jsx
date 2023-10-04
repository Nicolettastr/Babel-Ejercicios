import React, { useState } from 'react'
import Button from '../components/Button'
import '../styles/scrollToTop.css'

const ScrollOnTop = ({
    children
}) => {

    const [scrollTop, setScrollTop] = useState(0)

    const handleOnScroll = (event) => {
        setScrollTop(event.target.scrollTop)
    }
  
    const handleScrollToTop = () => {
        const scrollContainer = document.querySelector('.scrollContainer');
        return scrollContainer.scrollTop = 0
    }

    console.log(scrollTop)

    const scrollToTopPosition = parseInt(scrollTop)

  return (
    <div className='scrollContainer' onScroll={handleOnScroll}>
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