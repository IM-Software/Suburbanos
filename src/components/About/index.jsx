

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import ImageUp from '../../assets/produtora.png'
import ImageBelow from '../../assets/sobreimagem.png'
import { useEffect, useState } from 'react'
import ImageBackground from '../../assets/background-sobre.png'
import ImageBackgroundMobile from '../../assets/sobre-background-mobile.png'

import { useWindowSize } from "@uidotdev/usehooks"

export const About = ({ section, nextSection, prevSection }) => {
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
            <img src={ImageBackground} alt="" className='background-img' />
            <img src={ImageBackgroundMobile} alt="" className='background-img-mobile' />
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
                        <img src={ImageUp} alt="" className={`${animation ? 'animation' : ''}`} />
                    </div>
                </div>
                <div className='low'>
                    <img src={ImageBelow} alt="" className={`${animation ? 'animation' : ''}`} />
                    <div className={`text ${animation ? 'animation' : ''}`}>
                        <h2 className={`${animation ? 'animation' : ''}`} >A Produtora</h2>
                        <div className="text-container">
                            <p className={`${animation ? 'animation' : ''}`}>Rodrigo Sant'Anna foi criado na favela carioca Morro dos Macacos, em Vila Isabel, Zona Norte do Rio de Janeiro. Após se formar pela Casa das Artes de Laranjeiras, aos 24 anos, Rodrigo estreou, ao lado da atriz Thalita Carauta, o espetáculo Os Suburbanos, em que tanto dirigiu, escreveu e atuou. O espetáculo que atingiu o sucesso de crítica e público ficou cinco anos em cartaz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`background ${animation ? 'animation' : ''}`}></div>
        </div>
    )
}