

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import Path from '../../assets/path-parte1.png'
import Triangle from '../../assets/projetos-triangulo.png'
import { useEffect, useState } from 'react'

export const Projects = ({ data, section, projects, nextSection, prevSection, setActiveProject }) => {
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        if (section === 2) {
            setTimeout(function () {
                setAnimation(true)
            }, 1000)
        }
        playAllVideos()
    }, [section])

    const playAllVideos = () => {
        const videos = document.querySelectorAll('.background-video')
        videos.forEach((video) => {
            video.play()
        })
    }


    return (
        <div className='projects' id='projects'>
            <img src={data.backgroundImg} className='background-img-projects' alt="" />
            <video className='background-video' playsInline muted loop src={data.videoBackground} />
            <div className='content'>
                <span className='about-text'>Projetos</span>
                <div className="controls">
                    <div className="first-line"></div>
                    <div className='control'>

                        <div className='ball-container'>
                            <button onClick={prevSection}><Prev /></button>
                            <Ball className='ball' />
                            <button onClick={nextSection}><Next /></button>
                        </div>

                    </div>
                    <div className="line"></div>
                </div>
            </div>
            <div className={`custom-swapper ${animation ? 'animation' : ''}`} >
                <Swiper className="list-projects" pagination={{ clickable: true }} direction={'horizontal'} spaceBetween={'50'} slidesPerView={'auto'}>
                    {projects.map((project, index) => (
                        <SwiperSlide className='project'>
                            <div className="image" onClick={() => setActiveProject(index)}>
                                <img src={project.logoSlider} alt="" className='signature' />
                                <div style={{ background: `linear-gradient(360deg, #000 0.26%, rgba(0, 0, 0, 0.00) 39.58%), url(${project.imageSlider})`, backgroundSize: 'cover', backgroundPosition: 'center' }} alt='' className='img-main' />
                            </div>
                            <div className='stream'>
                                <p>{project.projectType}</p>
                                <div className="line-stream"></div>
                                <p className='type'>{project.projectType2}</p>
                                <img src={project.streamLogo} alt="" />
                            </div>
                            <div className='project-text'>
                                <p>{project.textSlider}</p>
                            </div>
                            <button onClick={() => setActiveProject(index)}>Ver Projeto</button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='path'>
                <img src={Path} alt="" />
            </div>
            <div className="triangle"><img src={Triangle} alt="" /></div>
        </div>
    )
}