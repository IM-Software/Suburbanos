import './styles.scss'

import { ReactComponent as Path } from '../../assets/sobre-path.svg'
import { FooterModals } from '../FooterModals';
import { useRef, useEffect } from 'react';
import LineTop from '../../assets/sobre-linha-topo.png'
import LineLow from '../../assets/sobre-linha-baixo.png'
import Balls from '../../assets/reticula.png'

export const ModalAbout = ({data, openAbout, setOpenAbout,  navigation, footer}) => {
    const modalRef = useRef(null)

    useEffect(() => {
        if (modalRef.current && !openAbout) {
            setTimeout(function () {
                modalRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }, 1000)
        }
    }, [openAbout])

    return (
        <div className={`modal-about ${openAbout ? 'active' : ''}`} ref={modalRef}>
            <div className='text-primary'>
                <img src={Balls} alt="" className='balls' />
                <img src={LineTop} alt="" className='line-top'/>
                <div className="image">
                    <img src={data.photoPart1} alt="" />
                </div>
                <img src={LineLow} alt="" className='line-low' />
                <div className='text'>
                    <h2>{data.titlePart1}</h2>
                    <p>{data.textPart1}</p>
                </div>
            </div>
            <div className='text-secondary'>
                <div className='text'>
                    <h3>{data.titlePart2}</h3>
                    <p>{data.textPart2}</p>
                </div>
                <div className='image'>
                    <Path className='path' />
                    <img src={data.photoPart2} alt="" />
                </div>
                <img src={Balls} alt="" className='balls' />
            </div>
            <div className='photos'>
                <h3>Quem somos</h3>
                <div className='cards'>
                    {data.team.map((card) => (
                        <div className="card">
                            <div className="img-container">
                                <img src={card.photo} alt={card.name} />
                            </div>
                            <div className="infos">
                                <h4>{card.name}</h4>
                                <p className='profession'>{card.profession}</p>
                                <p>{card.textOne} <span>{card.textTwo}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterModals navigation={navigation} toggleModal={setOpenAbout} data={footer}/>
        </div>
    )
}