import './styles.scss'

import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { CastCarousel } from '../CastCarousel'
import { FooterModals } from '../FooterModals'
import { CitationsCarousel } from '../CitationsCarousel'
import { useEffect } from 'react'
import { useRef } from 'react'
import Balls from '../../assets/reticula.png'

export const ModalProject = ({ projectActiveIndex, openModal, closeModal, navigation, setVideoUrl, projects, setActiveProject }) => {
    const gallery = [
        { type: 'img', url: 'https://uploads.metropoles.com/wp-content/uploads/2022/10/05152141/649A9996.jpg' },
        { type: 'video', url: 'https://www.youtube.com/watch?v=3RFDYoTHAiI', imgBackground: 'https://www.tribunaribeirao.com.br/site/wp-content/uploads/2022/06/imagem-45-scaled.jpg' },
        { type: 'img', url: 'https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg' },
        { type: 'img', url: 'https://telaviva.com.br/wp-content/uploads/2022/06/os-suburbanos.jpg' },
        { type: 'img', url: 'https://br.web.img3.acsta.net/videothumbnails/16/01/14/13/29/591971.jpg' },
        { type: 'img', url: 'https://f.i.uol.com.br/fotografia/2022/10/05/1665016089633e21194a154_1665016089_3x2_md.jpg' },
        { type: 'img', url: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg' },
        { type: 'img', url: 'https://s2-g1.glbimg.com/Fbx46S8zDQBCX2KYxoHyPUnPEhQ=/0x0:980x551/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/n/g/BK6kJESNyaf5XuLvLefw/os-suburbanos.jpg' },
    ]

    const modalRef = useRef(null)

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }, [openModal, projectActiveIndex])


    return (
        <div className={`modal-project ${openModal ? 'active' : ''}`} ref={modalRef}>
            <div className="main">
                <img src={projects[projectActiveIndex]?.modal.imgMain} alt="" className='img-main' />
                <img src={projects[projectActiveIndex]?.signature} alt="" className='signature' />
            </div>
            <div className='video' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                <div className="image">
                    <img src={projects[projectActiveIndex]?.modal.videoBackground} alt="" />
                </div>
                <PlayButton className='playButton' />
            </div>
            <div className='infos'>
                <h2>{projects[projectActiveIndex]?.name}</h2>
                <div className='stream'>
                    <img src={projects[projectActiveIndex]?.streamImg} alt="" />
                    <p>{projects[projectActiveIndex]?.style}</p>
                    <div className="line"></div>
                    <p className='type'>{projects[projectActiveIndex]?.type}</p>
                </div>
                <div className="texts">
                    <div className="text">
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <span className='text-secondary'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
                    </div>
                    <div className="people">
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                        </div>
                    </div>
                </div>
            </div>
            <CastCarousel />
            <div className="second-part">
                <div className='gallery'>
                    <div className='imgs-35-65'>
                        {gallery[0].type === 'img' ? (
                            <img src={gallery[0].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[0].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[1].type === 'img' ? (
                            <img src={gallery[1].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[1].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {gallery[2].type === 'img' ? (
                            <img src={gallery[2].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[2].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[3].type === 'img' ? (
                            <img src={gallery[3].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[3].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {gallery[4].type === 'img' ? (
                            <img src={gallery[4].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[4].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[5].type === 'img' ? (
                            <img src={gallery[5].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[5].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-65-35'>
                        {gallery[6].type === 'img' ? (
                            <img src={gallery[6].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[6].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[7].type === 'img' ? (
                            <img src={gallery[7].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={gallery[7].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        <img src={Balls} alt="" className='balls' />
                    </div>
                </div>
                <CitationsCarousel />
                <div className='outher-projects'>
                    {projects[projectActiveIndex - 1] &&
                        <div className='projectOne'>
                            <div className="name">
                                <h3>{projects[projectActiveIndex - 1].name}</h3>
                            </div>
                            <div className="image" onClick={() => setActiveProject(projectActiveIndex - 1)}>
                                <div className='background'></div>
                                <div className="img-container">
                                    <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    }
                    {projects[projectActiveIndex + 1] &&
                        <div className='projectTwo'>
                            <div className="name">
                                <h3>{projects[projectActiveIndex + 1]?.name}</h3>
                            </div>
                            <div className="image" onClick={() => setActiveProject(projectActiveIndex + 1)}>
                                <div className='background'></div>
                                <div className="img-container">
                                    <img src="https://uploads.metropoles.com/wp-content/uploads/2022/10/05152141/649A9996.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <FooterModals toggleModal={closeModal} navigation={navigation} />
            </div>
        </div>
    )
}