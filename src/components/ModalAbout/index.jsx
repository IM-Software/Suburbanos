import './styles.scss'

import Logo from '../../assets/LogoSuburbanos.png';

export const ModalAbout = () =>{
    return(
        <div className='modal-about'>
            <header>
                <img src={Logo} alt="Logo" />
            </header>
            <div className='main'>
                <img src='https://i.em.com.br/EnHrlv4WsVtZMITtZGFWfHasl0Q=/1200x1200/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/06/06/1371354/rodrigo-santanna-como-jefinho-do-programa-os-suburbanos-no-multishow-_1_53154.jpg' alt="" />
            </div>
        </div>
    )
}