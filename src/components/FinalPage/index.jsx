import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { useEffect, useState } from 'react'
import { ModalAbout } from '../ModalAbout/index.jsx'
import { ContactModal } from '../ContactModal/index.jsx'
import { ModalProjectFinal } from '../ModalProjectFinal/index.jsx'

export const FinalPage = ({ prevSection, changeHeaderFunction }) => {
    const [openAbout, setOpenAbout] = useState(false)
    const [openContact, setOpenContact] = useState(false)
    const [openProject, setOpenProject] = useState(false)

    const closeModals = () =>{
        setOpenAbout(false)
        setOpenContact(false)
        setOpenProject(false)
    }

    useEffect(() =>{
        if(openAbout || openContact || openProject){
            changeHeaderFunction(closeModals)
        }else{
            changeHeaderFunction(null)
        }
    }, [openAbout, openContact, openProject])

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
                            <span className='multi-text'>Quem Somos</span>
                            <span className='multi-text'>Contato</span>
                            <span className='multi-text'>Deu ruim</span>
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
                    <img src="https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" alt="" srcset="" onClick={() => setOpenAbout(true)}/>
                    <img src="https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" alt="" srcset="" onClick={() => setOpenContact(true)}/>
                    <video src="https://projects-temp.s3.sa-east-1.amazonaws.com/train.mp4"
                        onMouseEnter={(e) => {
                            setTimeout(() => {
                                e.target.play()
                            }, 500)
                        }}
                        onMouseLeave={(e) => e.target.pause()}
                        onClick={() => setOpenProject(true)}
                    ></video>
                </div>
            </div>
            <ModalAbout openAbout={openAbout}/>
            <ContactModal openContact={openContact}/>
            <ModalProjectFinal openProject={openProject}/>
        </div>
    )
}