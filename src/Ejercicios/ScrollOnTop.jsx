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
        document.querySelector('.scrollContainer').scrollTop = 0;
    }

    console.log(scrollTop)

    const scrollToTopPosition = parseInt(scrollTop)

  return (
    <div className='scrollContainer' onScroll={handleOnScroll}>
        {children}
        <Button 
            className={'scrollToTop_position scrollToTop_ButtonDesign secondary'} 
            buttonName={scrollToTopPosition}/>
        {scrollTop >= 1000 ? 
            <div className='scrollToTop_Button'>
                <Button 
                    className={'scrollToTop_ButtonDesign principal'} 
                    buttonName={'Scroll to top'}
                    onClick={handleScrollToTop}/>
            </div>
        : '' }
    </div>
  )
}

export default ScrollOnTop