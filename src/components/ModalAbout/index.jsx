import './styles.scss'

import Logo from '../../assets/LogoSuburbanos.png';
import ImageMain from '../../assets/09_12_21_Os Suburbanos_Foto Fabrizia Granatieri_191 1.png'
import ImageSecondary from '../../assets/sobreimagem.png'
import { ReactComponent as Path } from '../../assets/sobre-path.svg'
import { FooterModals } from '../FooterModals';
import { useRef, useEffect } from 'react';
import LineTop from '../../assets/sobre-linha-topo.png'
import LineLow from '../../assets/sobre-linha-baixo.png'
import Balls from '../../assets/reticula.png'

export const ModalAbout = ({openAbout, setOpenAbout,  navigation}) => {
    const modalRef = useRef(null)

    const cards = [
        { img: "https://s2-g1.glbimg.com/Fbx46S8zDQBCX2KYxoHyPUnPEhQ=/0x0:980x551/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/n/g/BK6kJESNyaf5XuLvLefw/os-suburbanos.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    ]

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
                    <img src={ImageMain} alt="" />
                </div>
                <img src={LineLow} alt="" className='line-low' />
                <div className='text'>
                    <h2>RODRIGO SANT’ANNA</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
            </div>
            <div className='text-secondary'>
                <div className='text'>
                    <h3>Os Suburbanos</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
                <div className='image'>
                    <Path className='path' />
                    <img src={ImageSecondary} alt="" />
                </div>
                <img src={Balls} alt="" className='balls' />
            </div>
            <div className='photos'>
                <h3>Quem somos</h3>
                <div className='cards'>
                    {cards.map((card) => (
                        <div className="card">
                            <div className="img-container">
                                <img src={card.img} alt={card.name} />
                            </div>
                            <div className="infos">
                                <h4>{card.name}</h4>
                                <p className='profession'>{card.profession}</p>
                                <p>{card.textOne} <span>{card.textSecondary}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterModals navigation={navigation} toggleModal={setOpenAbout}/>
        </div>
    )
}