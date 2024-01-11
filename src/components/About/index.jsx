

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { useEffect, useState } from 'react'

import { useWindowSize } from "@uidotdev/usehooks"

export const About = ({ section, nextSection, prevSection, data }) => {
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        if (section === 1) {
            setTimeout(function () {
                setAnimation(true)
            }, 1000)
        }
    }, [section])


    return (
        <div className='about' id='producer'>
            <img src={data.background} alt="" className='background-img' />
            <img src={data.backgroundMobile} alt="" className='background-img-mobile' />
            <div className='content'>
                <span className='about-text'>Sobre</span>
                <div className="controls">
                    <div className="first-line-mobile">
                        <div className="right" />
                        <div className="middle" />
                        <div className="left" />
                    </div>
                    <div className="first-line"></div>
                    <div className='control'>
                        <div className='ball-container'>
                            <button onClick={prevSection}><Prev /></button>
                            <Ball className='ball' />
                            <button onClick={nextSection}><Next /></button>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
            <div className='container'>
                <div className="up">
                    <div className="img-container">
                        <img src={data.imageUp} alt="" className={`${animation ? 'animation' : ''}`} />
                    </div>
                </div>
                <div className='low'>
                    <img src={data.imageLow} alt="" className={`${animation ? 'animation' : ''}`} />
                    <div className={`text ${animation ? 'animation' : ''}`}>
                        <h2 className={`${animation ? 'animation' : ''}`} >{data.title}</h2>
                        <div className="text-container">
                            <p className={`${animation ? 'animation' : ''}`}>{data.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`background ${animation ? 'animation' : ''}`}></div>
        </div>
    )
}