import './styles.scss'

import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { CastCarousel } from '../CastCarousel'
import { FooterModals } from '../FooterModals'
import { CitationsCarousel } from '../CitationsCarousel'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Balls from '../../assets/reticula.png'

export const ModalProject = ({ projectActiveIndex, openModal, closeModal, navigation, setVideoUrl, projects, setActiveProject, footer }) => {
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
                <img src={projects[projectActiveIndex]?.imageMain} alt="" className='img-main' />
                <img src={projects[projectActiveIndex]?.logoModal} alt="" className='signature' />
                <div className="shadow"></div>
            </div>
            <div className='video' onClick={() => setVideoUrl(`${projects[projectActiveIndex]?.trailerUrl}`)}>
                <div className="image">
                    <img src={projects[projectActiveIndex]?.trailerThumb} alt="" />
                </div>
                <PlayButton className='playButton' />
            </div>
            <div className='infos'>
                <h2>{projects[projectActiveIndex]?.name}</h2>
                <div className='stream'>
                    <img src={projects[projectActiveIndex]?.streamLogo} alt="" />
                    <p>{projects[projectActiveIndex]?.projectType}</p>
                    <div className="line"></div>
                    <p className='type'>{projects[projectActiveIndex]?.projectType2}</p>
                </div>
                <div className="texts">
                    <div className="text">
                        <p><span>{projects[projectActiveIndex]?.textOne}</span> <span className='text-secondary'>{projects[projectActiveIndex]?.textTwo}</span></p>
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
            {projectActiveIndex !== null && <CastCarousel carousel={projects[projectActiveIndex]?.seasons} title={projects[projectActiveIndex]?.sliderTitle} quotationMarks={projects[projectActiveIndex]?.quotationMarks} />}
            <div className="second-part">
                <div className='gallery'>
                    <div className='imgs-35-65'>
                        {projects[projectActiveIndex]?.assetType1 === false ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl1} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl1}`)}>
                                <img src={projects[projectActiveIndex]?.thumbVideo1} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.assetType2 === false ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl2} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl2}`)}>
                                <img src={projects[projectActiveIndex]?.thumbVideo2} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {projects[projectActiveIndex]?.assetType3 === false ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl3} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl3}`)}>
                                <img src={projects[projectActiveIndex]?.thumbVideo3} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.assetType4 === false  ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl4} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl4}`)}>
                                <img src={projects[projectActiveIndex]?.thumbVideo4} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-50-50'>
                        {projects[projectActiveIndex]?.assetType5 === false ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl5} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl5}`)}>
                                <img src={projects[projectActiveIndex]?.thumbVideo5} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.assetType6 === false ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl6} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl6}`)}>
                                <img src={projects[projectActiveIndex]?.thumbVideo6} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                    </div>
                    <div className='imgs-65-35'>
                        {projects[projectActiveIndex]?.assetType7 === false ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl7} alt="" className='one' />
                        ) : (
                            <div className='video-gallery one' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl7}`)}>
                                <img src={projects[projectActiveIndex]?.thumbVideo7} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        {projects[projectActiveIndex]?.assetType7 === false  ? (
                            <img src={projects[projectActiveIndex]?.galleryUrl8} alt="" className='two' />
                        ) : (
                            <div className='video-gallery two' onClick={() => setVideoUrl(`${projects[projectActiveIndex].galleryUrl8}`)}>
                                <img src={projects[projectActiveIndex]?.galleryUrl8} alt="" className='videoBackground' />
                                <PlayButton className='playButton' />
                            </div>
                        )}
                        <img src={Balls} alt="" className='balls' />
                    </div>
                </div>
                {projectActiveIndex !== null && <CitationsCarousel citations={projects[projectActiveIndex]?.deposition} />}
                <div className='outher-projects'>
                    {projects[nextProject] &&
                        <div className='projectOne'>
                            <div className="name">
                                <h3 className={`${nextHover ? 'hover' : ''}`}>{projects[nextProject].name}</h3>
                            </div>
                            <div className="image" onClick={() => setActiveProject(nextProject)} onMouseEnter={() => setNextHover(true)} onMouseLeave={() => setNextHover(false)}>
                                <div className='background'></div>
                                <div className="img-container">
                                    <img src={projects[nextProject]?.imageSlider} alt="" />
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
                                    <img src={projects[prevProject]?.imageSlider} alt="" />
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <FooterModals toggleModal={closeModal} navigation={navigation} data={footer} />
            </div>
        </div>
    )
}