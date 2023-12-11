

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import  {Header}  from '../../components/Header/index.jsx'
import { useState } from 'react'
import { ModalAbout } from '../ModalAbout/index.jsx'
import { ContactModal } from '../ContactModal/index.jsx'

export const FinalPage = ({ prevSection }) => {
    const [openAbout, setOpenAbout] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    return (
        <div className='final-page'>
            <Header />
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
                    ></video>
                </div>
            </div>
            {openAbout &&
                <ModalAbout/>
            }
            {openContact &&
                <ContactModal/>
            }
        </div>
    )
}