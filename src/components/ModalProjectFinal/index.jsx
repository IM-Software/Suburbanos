import './styles.scss'

import Slider from "react-slick"
import Logo from '../../assets/story-header-img.png'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { CitationsCarousel } from '../CitationsCarousel'
import { FooterModals } from '../FooterModals'

export const ModalProjectFinal = ({ openProject, setOpenProject, navigation, setVideoUrl }) => {
    const modalRef = useRef(null)
    const [activeSlide, setACtiveSlide] = useState(0)

    const stories = [
        { img: "https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" },
        { img: "https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large" },
        { img: "https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" },
        { img: "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg" },
        { img: "https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large" },
        { img: "https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" },
        { img: "https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" },
    ]


    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }, [openProject])

    useEffect(() => {
        const middleIndex = Math.floor(stories.length / 2)
        if (sliderRef.current) {
            setACtiveSlide(middleIndex)
            sliderRef.current.slickGoTo(middleIndex)
        }
    }, [stories.length])


    const settings = {
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
        speed: 500,
    }

    const sliderRef = useRef(null)

    const handleDotClick = (index) => {
      if (sliderRef.current) {
        setACtiveSlide(index)
        sliderRef.current.slickGoTo(index)
      }
    }

    return (
        <div className={`project-final ${openProject ? 'active' : ''}`} ref={modalRef}>
            <div className="main">
                <Slider {...settings} className='carrossel' ref={sliderRef}>
                    {stories.map((story, index) => (
                        <div className={`story`}  onClick={() => handleDotClick(index)}>
                            <div className='story-header'>
                                <img src={Logo} alt="Logo" />
                                <p>Os Suburbanos Bloopers</p>
                            </div>
                            <img src={story.img} alt="" />
                        </div>
                    ))}
                </Slider>
                <div className='nav'>
                    {stories.map((story, index) => (
                        <div className="bar-container" onClick={() => handleDotClick(index)}>
                            <div className={`bar ${activeSlide === index ? 'active' : ''}`}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gallery">
                <div className='videos-top'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-middle-one' >
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-middle-two'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-bottom-one'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-low'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <CitationsCarousel />
            <FooterModals navigation={navigation} toggleModal={setOpenProject} />
        </div>
    )
}