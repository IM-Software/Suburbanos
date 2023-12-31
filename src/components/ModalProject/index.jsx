import './styles.scss'

import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { CastCarousel } from '../CastCarousel'
import { FooterModals } from '../FooterModals'
import { CitationsCarousel } from '../CitationsCarousel'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Balls from '../../assets/reticula.png'

export const ModalProject = ({ projectActiveIndex, openModal, closeModal, navigation, setVideoUrl, projects, setActiveProject }) => {
    const [nextProject, setNextProject] = useState(0)
    const [prevProject, setPrevProject] = useState(0)
    const [nextHover, setNextHover] = useState(false)
    const [prevHover, setPrevHover] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        if (modalRef.current && !openModal) {
            setTimeout(function () {
                modalRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }, 1000)
        }
    }, [openModal])

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }, [projectActiveIndex])

    useEffect(() =>{
        if(projectActiveIndex + 1 === projects.length){
            setNextProject(0)
        }else{
            setNextProject(projectActiveIndex + 1)
        }

        if(projectActiveIndex - 1 < 0){
            setPrevProject(projects.length - 1)
        }else{
            setPrevProject(projectActiveIndex - 1)
        }

    },[projectActiveIndex, projects.length])

    return (
        <div className={`modal-project ${openModal ? 'active' : ''}`} ref={modalRef}>
            <div className="main">
                <img src={projects[projectActiveIndex]?.modal.imgMain} alt="" className='img-main' />
                <img src={projects[projectActiveIndex]?.signature} alt="" className='signature' />
                <div className="shadow"></div>
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
            {projectActiveIndex !== null && <CastCarousel carousel={projects[projectActiveIndex]?.carousel} title={projects[projectActiveIndex]?.carouselTitle} />}
            <div className="second-part">
                <div className='gallery'>
                    <div className='imgs-35-65'>
                        {projects[projectActiveIndex]?.modal.gallery[0].type === 'img' ? (
                            <img src={projects[projectActiveIndex].modal.gallery[0].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[0].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.modal.gallery[1].type === 'img' ? (
                            <img src={projects[projectActiveIndex]?.modal.gallery[1].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[1].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {projects[projectActiveIndex]?.modal.gallery[2].type === 'img' ? (
                            <img src={projects[projectActiveIndex].modal.gallery[2].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[2].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.modal.gallery[3].type === 'img' ? (
                            <img src={projects[projectActiveIndex]?.modal.gallery[3].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[3].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {projects[projectActiveIndex]?.modal.gallery[4].type === 'img' ? (
                            <img src={projects[projectActiveIndex]?.modal.gallery[4].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[4].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.modal.gallery[5].type === 'img' ? (
                            <img src={projects[projectActiveIndex]?.modal.gallery[5].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[5].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-65-35'>
                        {projects[projectActiveIndex]?.modal.gallery[6].type === 'img' ? (
                            <img src={projects[projectActiveIndex]?.modal.gallery[6].url} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[6].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.modal.gallery[7].type === 'img' ? (
                            <img src={projects[projectActiveIndex]?.modal.gallery[7].url} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                                <img src={projects[projectActiveIndex]?.modal.gallery[7].imgBackground} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        <img src={Balls} alt="" className='balls' />
                    </div>
                </div>
                {projectActiveIndex !== null && <CitationsCarousel citations={projects[projectActiveIndex].citations} />}
                <div className='outher-projects'>
                    {projects[nextProject] &&
                        <div className='projectOne'>
                            <div className="name">
                                <h3 className={`${nextHover ? 'hover' : ''}`}>{projects[nextProject].name}</h3>
                            </div>
                            <div className="image" onClick={() => setActiveProject(nextProject)} onMouseEnter={() => setNextHover(true)} onMouseLeave={() => setNextHover(false)}>
                                <div className='background'></div>
                                <div className="img-container">
                                    <img src={projects[nextProject]?.thumb} alt="" />
                                </div>
                            </div>
                        </div>
                    }
                    {projects[prevProject] &&
                        <div className='projectTwo'>
                            <div className={`name ${prevHover ? 'hover' : ''}`}>
                                <h3>{projects[prevProject]?.name}</h3>
                            </div>
                            <div className="image" onClick={() => setActiveProject(prevProject)} onMouseEnter={() => setPrevHover(true)} onMouseLeave={() => setPrevHover(false)}>
                                <div className='background'></div>
                                <div className="img-container">
                                    <img src={projects[prevProject]?.thumb} alt="" />
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