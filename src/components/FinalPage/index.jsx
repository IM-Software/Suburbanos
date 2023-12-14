import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { useState } from 'react'

export const FinalPage = ({ prevSection, navigation }) => {
    const [hoverAbout, setHoverAbout] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)
    const [hoverProject, setHoverProject] = useState(false)

    return (
        <div className='final-page'>
            <div className='content'>
                <div className="controls">
                    <div className="first-line"></div>
                    <div className='control'>
                        <div className='ball-container'>
                            <button onClick={prevSection}><Prev /></button>
                            <Ball className='ball' />
                        </div>
                    </div>
                    <div className="custom-line">

                        <div className='ball-with-text'>
                            <span className={`multi-text ${hoverAbout ? 'hover' : ''}`}>Quem Somos</span>
                            <span className={`multi-text ${hoverContact ? 'hover' : ''}`}>Contato</span>
                            <span className={`multi-text ${hoverProject ? 'hover' : ''}`}>Deu ruim</span>
                        </div>

                        <div className='line-wrap'>
                            <div className="line"></div>
                            <Ball className='ball' />
                            <div className="line"></div>
                            <Ball className='ball' />
                            <div className="line"></div>
                            <Ball className='ball' />
                            <div className="line"></div>

                        </div>

                    </div>
                </div>
                <div className='images'>
                    <img src="https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" alt="" onMouseEnter={() => setHoverAbout(true)} onMouseLeave={() => setHoverAbout(false)} onClick={() => navigation('about')} id='img-about'/>
                    <img src="https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" alt="" onMouseEnter={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)} onClick={() => navigation('contact')}/>
                    <video src="https://projects-temp.s3.sa-east-1.amazonaws.com/train.mp4"
                        onMouseEnter={(e) => {
                            setTimeout(() => {
                                e.target.play()
                            }, 500)
                            setHoverProject(true)
                        }}
                        onMouseLeave={(e) => {
                            e.target.pause()
                            setHoverProject(false)
                        }}
                        onClick={() => navigation('projectFinal')}
                    ></video>
                </div>
            </div>
        </div>
    )
}