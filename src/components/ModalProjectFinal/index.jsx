import './styles.scss'

import Slider from "react-slick"
import Logo from '../../assets/story-header-img.png'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { CitationsCarousel } from '../CitationsCarousel'
import { FooterModals } from '../FooterModals'

import story1 from '../../assets/temp/deuruim/story1.jpg'
import story2 from '../../assets/temp/deuruim/story2.jpg'
import story3 from '../../assets/temp/deuruim/story3.jpg'
import story4 from '../../assets/temp/deuruim/story4.jpg'
import story5 from '../../assets/temp/deuruim/story5.jpg'
import story6 from '../../assets/temp/deuruim/story6.jpg'
import story7 from '../../assets/temp/deuruim/story7.jpg'

import gallery1 from '../../assets/temp/deuruim/galeria-1.png'
import gallery2 from '../../assets/temp/deuruim/galeria-2.png'
import gallery3 from '../../assets/temp/deuruim/galeria-3.png'
import gallery4 from '../../assets/temp/deuruim/galeria-4.png'
import gallery5 from '../../assets/temp/deuruim/galeria-5.png'
import gallery6 from '../../assets/temp/deuruim/galeria-6.png'
import gallery7 from '../../assets/temp/deuruim/galeria-7.png'
import gallery8 from '../../assets/temp/deuruim/galeria-8.png'
import gallery9 from '../../assets/temp/deuruim/galeria-9.png'

export const ModalProjectFinal = ({ openProject, setOpenProject, navigation, setVideoUrl }) => {
    const modalRef = useRef(null)
    const [activeSlide, setActiveSlide] = useState(0)
    const [barActive, setBarActive] = useState(0)

    const stories = [
        { img: story1 },
        { img: story2 },
        { img: story3 },
        { img: story4 },
        { img: story5 },
        { img: story6 },
        { img: story7 },
    ]

    const citations = [
        { photo: 'https://s2-g1.glbimg.com/Fbx46S8zDQBCX2KYxoHyPUnPEhQ=/0x0:980x551/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/n/g/BK6kJESNyaf5XuLvLefw/os-suburbanos.jpg', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'Rodrigo Sant’Anna' },
        { photo: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg', text: 'Lorem perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium', name: ' Lorem' },
        { photo: 'https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.', name: 'Maria' },
    ]


    useEffect(() => {
        if (modalRef.current && !openProject) {
            setTimeout(function () {
                modalRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }, 1000)
        }
    }, [openProject])

    useEffect(() => {
        const middleIndex = Math.floor(stories.length / 2)
        if (sliderRef.current) {
            setActiveSlide(middleIndex)
            setBarActive(middleIndex)
            sliderRef.current.slickGoTo(middleIndex)
        }
    }, [stories.length, openProject])

    const handleSlideChange = (index) => {
        setBarActive(index)
    }


    const settings = {
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
        speed: 500,
        afterChange: handleSlideChange
    }

    const sliderRef = useRef(null)

    const handleDotClick = (index) => {
      if (sliderRef.current) {
        setActiveSlide(index)
        setBarActive(index)
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
                            <div className={`bar ${barActive === index ? 'active' : ''}`}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gallery">
                <div className='videos-top'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery1} alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery2} alt="" />
                    </div>
                </div>
                <div className='videos-middle-one' >
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery3} alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery4} alt="" />
                    </div>
                </div>
                <div className='videos-middle-two'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery5} alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery6} alt="" />
                    </div>
                </div>
                <div className='videos-bottom-one'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery7} alt="" />
                    </div>
                    <div className='video right' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery8} alt="" />
                    </div>
                </div>
                <div className='videos-low'>
                    <div className='video left' onClick={() => setVideoUrl('https://www.youtube.com/watch?v=fFrGoNDCnMM')}>
                        <PlayButton className='playButton' />
                        <img src={gallery9} alt="" />
                    </div>
                </div>
            </div>
            <CitationsCarousel citations={citations}/>
            <FooterModals navigation={navigation} toggleModal={setOpenProject} />
        </div>
    )
}