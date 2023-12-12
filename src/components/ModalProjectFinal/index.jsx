import './styles.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import Logo from '../../assets/story-header-img.png'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { CitationsCarousel } from '../CitationsCarousel'
import { FooterModals } from '../FooterModals'

export const ModalProjectFinal = ({openProject}) => {
    const swiperRef = useRef(null)
    const [activeSlide, setActiveSlide] = useState(0)

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
        const swiperInstance = swiperRef.current.swiper
        swiperInstance.on('slideChange', () => {
            const activeIndex = swiperInstance.activeIndex
            setActiveSlide(activeIndex)
        })
        const middleIndex = Math.floor(swiperInstance.slides.length / 2)
        swiperInstance.slideTo(middleIndex)
    }, [])

    const handleSlideClick = (index) => {
        const swiperInstance = swiperRef.current.swiper
        swiperInstance.slideTo(index)
    }

    return (
        <div className={`project-final ${openProject ? 'active' : ''}`}>
            <div className="main">
                <Swiper className='stories'
                    ref={swiperRef}
                    pagination={{ clickable: true }}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={30}
                    initialSlide={4}
                >
                    {stories.map((story, index) => (
                        <SwiperSlide className={`story ${activeSlide === index ? 'active' : ''}`} onClick={() => handleSlideClick(index)}>
                            <div className='story-header'>
                                <img src={Logo} alt="Logo" />
                                <p>Os Suburbanos Bloopers</p>
                            </div>
                            <img src={story.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='bars'>
                    <div className='bar'></div>
                    <div className='bar active'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
            <div className="gallery">
                <div className='videos-top'>
                    <div className='video left'>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right'>
                        <PlayButton className='playButton' />
                        <img src="https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-middle-one'>
                    <div className='video left'>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right'>
                        <PlayButton className='playButton' />
                        <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-middle-two'>
                    <div className='video left'>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right'>
                        <PlayButton className='playButton' />
                        <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-bottom-one'>
                    <div className='video left'>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                    <div className='video right'>
                        <PlayButton className='playButton' />
                        <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg" alt="" />
                    </div>
                </div>
                <div className='videos-low'>
                    <div className='video left'>
                        <PlayButton className='playButton' />
                        <img src="https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <CitationsCarousel/>
            <FooterModals/>
        </div>
    )
}