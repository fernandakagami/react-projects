import './ListContainer.css'
import painel1 from '../../images/painel/painel1.png'
import painel2 from '../../images/painel/painel2.png'
import { useRef } from 'react'
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function ListContainer () {
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {                
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(0px)`;
        }
        if (direction === "right" && slideNumber < 1) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(-600px)`;
        }
    };

    return (                
        <div className="ListContainer">                                    
            <div className="MovieContainer" ref={listRef}>
                <div className='ItemContainer'>
                    <img src={painel1} alt='painel1' className='MainImage'></img>
                    <p className='ImageTitle'>Sistem Evaluasi dan Laporan</p>
                    <small className='ImageText'>Universitas Sultan Ageng Tirtayasa</small>
                </div>
                <div className='ItemContainer'>
                    <img src={painel2} alt='painel2' className='MainImage'></img>
                    <p className='ImageTitle'>Sistem Evaluasi dan Laporan</p>
                    <small className='ImageText'>Universitas Sultan Ageng Tirtayasa</small>
                </div>
                <div className='ItemContainer'>
                    <img src={painel1} alt='painel1' className='MainImage'></img>
                    <p className='ImageTitle'>Sistem Evaluasi dan Laporan</p>
                    <small className='ImageText'>Universitas Sultan Ageng Tirtayasa</small>
                </div>
            </div>
            <div className='SliderArrowContainer'>
                <div className="SliderArrow" onClick={() => handleClick("left")}>
                    <FontAwesomeIcon icon={solid('arrow-left')} />
                </div>
                <div className="SliderArrow" onClick={() => handleClick("right")}>
                    <FontAwesomeIcon icon={solid('arrow-right')} />
                </div>
            </div>            
            <div className='Line'></div>
        </div>
    )
}

export default ListContainer