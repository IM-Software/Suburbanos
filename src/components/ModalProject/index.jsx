import './styles.scss'

import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { ReactComponent as CitationBackground } from '../../assets/citação-background.svg'
import { ReactComponent as CitationLine } from '../../assets/citação-linha.svg'
import { ReactComponent as Arrow } from '../../assets/rightarrow.svg'
import { ReactComponent as Balls } from '../../assets/reticula.svg'
import { CastCarousel } from '../CastCarousel'
import { useState } from 'react'
import { FooterModals } from '../FooterModals'

export const ModalProject = ({ project }) => {
    const [citationIndex, setCitationIndex] = useState(0)
    const [animationCitation, setAnimationCitation] = useState(true)

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

    const citations = [
        { photo: 'https://s2-g1.glbimg.com/Fbx46S8zDQBCX2KYxoHyPUnPEhQ=/0x0:980x551/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/n/g/BK6kJESNyaf5XuLvLefw/os-suburbanos.jpg', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'João José da Silva' },
        { photo: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg', text: 'Lorem perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium', name: ' Lorem' },
        { photo: 'https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.', name: 'Maria' },
        { photo: 'https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima placeat eius ex nisi laborum ipsam atque aliquam vero beatae, nobis recusandae neque doloremque totam suscipit! Voluptatem quod optio aliquid.', name: 'João' },
        { photo: 'https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima placeat eius ex nisi laborum ipsam atque aliquam vero beatae, nobis recusandae neque doloremque totam suscipit! Voluptatem quod optio aliquid.', name: 'Maria' },
    ]

    const nextCitation = () => {
        if (citations.length - 1 > citationIndex) {
            setCitationIndex(citationIndex + 1)
            setAnimationCitation(false)
            setTimeout(function () {
                setAnimationCitation(true)
            }, 1)
        }

    }

    const prevCitation = () => {
        if (citationIndex !== 0) {
            setCitationIndex(citationIndex - 1)
            setAnimationCitation(false)
            setTimeout(function () {
                setAnimationCitation(true)
            }, 1)
        }
    }

    return (
        <div className={`modal-project ${project ? 'active' : ''}`}>
            <img src={project?.modal.imgMain} alt="" className='img-main' />
            <div className='video'>
                <div className="image">
                    <img src={project?.modal.videoBackground} alt="" />
                </div>
                <PlayButton className='playButton' />
            </div>
            <div className='infos'>
                <h2>{project?.name}</h2>
                <div className='stream'>
                    <img src={project?.streamImg} alt="" />
                    <p>{project?.style}</p>
                    <div className="line"></div>
                    <p className='type'>{project?.type}</p>
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
                            <div className='video-gallery one'>
                                <img src={gallery[0].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[1].type === 'img' ? (
                            <img src={gallery[1].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two'>
                                <img src={gallery[1].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {gallery[2].type === 'img' ? (
                            <img src={gallery[2].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one'>
                                <img src={gallery[2].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[3].type === 'img' ? (
                            <img src={gallery[3].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two'>
                                <img src={gallery[3].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {gallery[4].type === 'img' ? (
                            <img src={gallery[4].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one'>
                                <img src={gallery[4].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[5].type === 'img' ? (
                            <img src={gallery[5].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two'>
                                <img src={gallery[5].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-65-35'>
                        {gallery[6].type === 'img' ? (
                            <img src={gallery[6].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one'>
                                <img src={gallery[6].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {gallery[7].type === 'img' ? (
                            <img src={gallery[7].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two'>
                                <img src={gallery[7].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        <Balls className='balls'/>
                    </div>
                </div>
                <div className='citation-container'>
                    <div className='citation'>
                        <div className='photo'>
                            <div className='background-photo'></div>
                            <div className='image'>
                                {animationCitation &&
                                    <img src={citations[citationIndex].photo} alt={citations[citationIndex].name} />
                                }
                            </div>
                            <div className='text'>
                                <p>“{citations[citationIndex].text}”</p>
                                <p className='name'>{citations[citationIndex].name}</p>
                            </div>
                        </div>
                        <CitationLine className='line' />
                        <CitationBackground className='background' />
                    </div>
                    <div className='controls'>
                        <Arrow className='arrow-left' onClick={prevCitation} />
                        <Arrow className='arrow' onClick={nextCitation} />
                    </div>
                </div>
                <div className='outher-projects'>
                    <div className='projectOne'>
                        <div className="name">
                            <h3>A Sogra Que Te Pariu</h3>
                        </div>
                        <div className="image">
                            <div className='background'></div>
                            <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className='projectTwo'>
                        <div className="name">
                            <h3>Os Suburbanos</h3>
                        </div>
                        <div className="image">
                            <div className='background'></div>
                            <img src="https://uploads.metropoles.com/wp-content/uploads/2022/10/05152141/649A9996.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <FooterModals/>
            </div>
        </div>
    )
}