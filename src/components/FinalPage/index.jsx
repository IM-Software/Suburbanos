import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { useState } from 'react'
import aboutImg from '../../assets/temp/quemsomos-img.png'
import contactImg from '../../assets/temp/contatoimg.png'
import deuRuimVideo from '../../assets/temp/deuruimvideo.mp4'
import Path from '../../assets/path-parte2.png'

export const FinalPage = ({ prevSection, navigation }) => {
    const [hoverAbout, setHoverAbout] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)
    const [hoverProject, setHoverProject] = useState(false)

    return (
        <div className='final-page'>
            <div className='container-line'>
                <div className='line-one'></div>
                <div className='control'>

                    <div className='ball-container'>
                        <button onClick={prevSection}><Prev /></button>
                        <Ball className='ball' />
                    </div>

                </div>
                <div className='line-two'></div>
            </div>
            <div className='container'>
                <div className='line-container'>
                    <span className={`${hoverAbout ? 'hover' : ''}`}>Quem Somos</span>
                    <Ball className='ball' />
                    <div className='line'></div>
                </div>
                <img src={aboutImg} alt="Imagem quem somos" onMouseEnter={() => setHoverAbout(true)} onMouseLeave={() => setHoverAbout(false)} onClick={() => navigation('about')} />
            </div>
            <div className='container'>
                <div className='line-container'>
                    <span className={`${hoverContact ? 'hover' : ''}`}>Contato</span>
                    <Ball className='ball' />
                    <div className='line'></div>
                </div>
                <img src={contactImg} alt="Imagem contato" onMouseEnter={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)} onClick={() => navigation('contact')} />
            </div>
            <div className='container'>
                <div className='line-container'>
                    <span className={`${hoverProject ? 'hover' : ''}`}>Deu ruim</span>
                    <Ball className='ball' />
                    <div className='line'></div>
                    <div className='final'></div>
                </div>
                <video src={deuRuimVideo}
                    onMouseEnter={(e) => {
                        e.target.play()
                        setHoverProject(true)
                    }}
                    onMouseLeave={(e) => {
                        e.target.pause()
                        setHoverProject(false)
                    }}
                    onClick={() => navigation('projectFinal')}
                ></video>
            </div>
            <div className='path'>
                <img src={Path} alt="" />
            </div>
        </div>
    )
}