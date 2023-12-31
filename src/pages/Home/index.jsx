import { About } from '../../components/About'
import './styles.scss'
import Logo from '../../assets/LogoSuburbanos.png'
import { Projects } from '../../components/Projects'
import { useState } from 'react'
import { FinalPage } from '../../components/FinalPage'
import { Header } from '../../components/Header'
import ImageLeft from '../../assets/home-left.png'
import ImageLow from '../../assets/home-low.png'
import ImageTop from '../../assets/home-top.png'
import ImageTop1 from '../../assets/home-top1.png'
import { useEffect } from 'react'
import { ModalAbout } from '../../components/ModalAbout'
import { ContactModal } from '../../components/ContactModal/index.jsx'
import { ModalProjectFinal } from '../../components/ModalProjectFinal/index.jsx'
import { ModalVideo } from '../../components/ModalVideo/index.jsx'
import { ModalProject } from '../../components/ModalProject/index.jsx'
import ImageTopMobile from '../../assets/home-vector-mobile-1.png'
import ImageCenterMobile from '../../assets/home-vector-mobile-2.png'
import ImageLowMobile from '../../assets/home-vector-mobile-3.png'

import imgSogra from '../../assets/temp/sogra/sogra.png'
import thumbSogra from '../../assets/temp/sogra/sogra-thumb.png'
import signatureSogra from '../../assets/temp/sogra/sogra-assinatura.png'
import modalSogra from '../../assets/temp/sogra/sogra-modalmain.png'
import sograVideoBackground from '../../assets/temp/sogra/sogra-video-background.png'
import rodrigoImg from '../../assets/temp/sogra/rodrigo.png'
import barbaraImg from '../../assets/temp/sogra/barbara.png'
import solangeImg from '../../assets/temp/sogra/solange.png'
import pedroImg from '../../assets/temp/sogra/pedro.png'
import neyImg from '../../assets/temp/sogra/neylima.jpg'
import sogragallery1 from '../../assets/temp/sogra/galeria-1.png'
import sogragallery2 from '../../assets/temp/sogra/galeria-2.png'
import sogragallery3 from '../../assets/temp/sogra/galeria-3.png'
import sogragallery4 from '../../assets/temp/sogra/galeria-4.png'
import sogragallery5 from '../../assets/temp/sogra/galeria-5.png'
import sogragallery6 from '../../assets/temp/sogra/galeria-6.png'
import sogragallery7 from '../../assets/temp/sogra/galeria-7.png'
import sogragallery8 from '../../assets/temp/sogra/galeria-8.png'
import citation1 from '../../assets/temp/sogra/sogra-citacao-1.png'

import imgToDeGraca from '../../assets/temp/todegraca/todegraça.png'
import signatureToDeGraca from '../../assets/temp/todegraca/tograça-assinatura.png'

import imgSuburbanos from '../../assets/temp/suburbanos/ossuburbanos.png'
import thumbSurburbanos from '../../assets/temp/suburbanos/suburbanos-thumb.png'
import modalSuburbanos from '../../assets/temp/suburbanos/suburbanos-modalmain.png'
import signatureSuburbanos from '../../assets/temp/suburbanos/suburbanos-assinatura.png'
import suburbanosVideoBackground from '../../assets/temp/suburbanos/suburbanos-video-background.png'
import alcioneImg from '../../assets/temp/suburbanos/alcione.png'
import alineImg from '../../assets/temp/suburbanos/alinejpg.jpg'
import diogoImg from '../../assets/temp/suburbanos/diogo.jpg'
import martinhoImg from '../../assets/temp/suburbanos/martinho.jpg'
import gracyaneImg from '../../assets/temp/suburbanos/gracyanejpg.jpg'
import suburbanosgallery1 from '../../assets/temp/suburbanos/galeria-1.png'
import suburbanosgallery2 from '../../assets/temp/suburbanos/galeria-2.png'
import suburbanosgallery3 from '../../assets/temp/suburbanos/galeria-3.png'
import suburbanosgallery4 from '../../assets/temp/suburbanos/galeria-4.png'
import suburbanosgallery5 from '../../assets/temp/suburbanos/galeria-5.png'
import suburbanosgallery6 from '../../assets/temp/suburbanos/galeria-6.png'
import suburbanosgallery7 from '../../assets/temp/suburbanos/galeria-7.png'
import suburbanosgallery8 from '../../assets/temp/suburbanos/galeria-8.png'
import citationSuburbanos1 from '../../assets/temp/suburbanos/suburbanos-citacao-1.png'

import { useWindowSize } from "@uidotdev/usehooks"

export const Home = () => {
    const [headerFunction, setHeaderFunction] = useState(null)
    const [headerbackground, setHeaderBackground] = useState(false)

    const [openAbout, setOpenAbout] = useState(false)
    const [openContact, setOpenContact] = useState(false)
    const [openProjectFinal, setOpenProject] = useState(false)
    const [openModalProject, setOpenModalProject] = useState(false)
    const [activeProject, setActiveProject] = useState(null)
    const [videoUrl, setVideoUrl] = useState(null)

    const [styleNav, setStyleNav] = useState(null)

    const { width } = useWindowSize()

    const [showSecondPart, setShowSecondPart] = useState(false)

    const projects = [
        {
            name: 'A Sogra Que Te Pariu',
            img: imgSogra,
            signature: signatureSogra,
            thumb: thumbSogra,
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: modalSogra,
                videoBackground: sograVideoBackground,
                gallery: [
                    { type: 'img', url: sogragallery1 },
                    { type: 'video', imgBackground: sogragallery2 },
                    { type: 'img', url: sogragallery3 },
                    { type: 'img', url: sogragallery4 },
                    { type: 'img', url: sogragallery5 },
                    { type: 'img', url: sogragallery6 },
                    { type: 'video', imgBackground: sogragallery7 },
                    { type: 'img', url: sogragallery8 },
                ]
            },
            carousel: [
                [
                    { photo: rodrigoImg, name: "Rodrigo Sant’Anna", character: 'Dona Isadir' },
                    { photo: barbaraImg, name: "Bárbara sut", character: 'Márcia' },
                    { photo: solangeImg, name: "Solange teixeira", character: 'Fátima' },
                    { photo: pedroImg, name: "Pedro Ottoni", character: 'Jonas' },
                    { photo: neyImg, name: "Ney Lima", character: 'Cezinha' },
                    { photo: rodrigoImg, name: "Rodrigo Sant’Anna", character: 'Dona Isadir' },
                    { photo: barbaraImg, name: "Bárbara sut", character: 'Márcia' },
                    { photo: solangeImg, name: "Solange teixeira", character: 'Fátima' },
                    { photo: pedroImg, name: "Pedro Ottoni", character: 'Jonas' },
                    { photo: neyImg, name: "Ney Lima", character: 'Cezinha' },
                ],
                [
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'De Troca' },
                ]
            ],
            carouselTitle: "Elenco",
            citations: [
                { photo: citation1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'João José da Silva' },
                { photo: citationSuburbanos1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'Martinho Da Vila' },
            ]
        },
        {
            name: 'To De Graça',
            img: imgToDeGraca,
            thumb: imgSuburbanos,
            signature: signatureToDeGraca,
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://s2-globo-play.glbimg.com/UdLUg1yvhNACao5rCjP-Ojn-IGw=/fit-in/168x84/https://s2-globo-play.glbimg.com/qHQE0NzLxInciSqEWtDPp1-ZuXw=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_d2470d85104948f09eee09d5028bee11/internal_photos/bs/2020/D/h/2YxRA7QDucu67krg8Lrg/multishow.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://telaviva.com.br/wp-content/uploads/2022/06/os-suburbanos.jpg',
                gallery: [
                    { type: 'img', url: sogragallery1 },
                    { type: 'video', imgBackground: sogragallery2 },
                    { type: 'img', url: sogragallery3 },
                    { type: 'img', url: sogragallery4 },
                    { type: 'img', url: sogragallery5 },
                    { type: 'img', url: sogragallery6 },
                    { type: 'video', imgBackground: sogragallery7 },
                    { type: 'img', url: sogragallery8 },
                ]
            },
            carousel: [
                [
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                ],
                [
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'Fulano' },
                ]
            ],
            carouselTitle: "Elenco",
            citations: [
                { photo: citation1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'João José da Silva' },
                { photo: citationSuburbanos1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'Martinho Da Vila' },
            ]
        },
        {
            name: 'Os Suburbanos',
            img: imgSuburbanos,
            thumb: thumbSurburbanos,
            signature: signatureSuburbanos,
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://s2-globo-play.glbimg.com/UdLUg1yvhNACao5rCjP-Ojn-IGw=/fit-in/168x84/https://s2-globo-play.glbimg.com/qHQE0NzLxInciSqEWtDPp1-ZuXw=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_d2470d85104948f09eee09d5028bee11/internal_photos/bs/2020/D/h/2YxRA7QDucu67krg8Lrg/multishow.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: modalSuburbanos,
                videoBackground: suburbanosVideoBackground,
                gallery: [
                    { type: 'img', url: suburbanosgallery1 },
                    { type: 'img', url: suburbanosgallery2 },
                    { type: 'video', imgBackground: suburbanosgallery3 },
                    { type: 'img', url: suburbanosgallery4 },
                    { type: 'img', url: suburbanosgallery5 },
                    { type: 'img', url: suburbanosgallery6 },
                    { type: 'img', url: suburbanosgallery7 },
                    { type: 'img', url: suburbanosgallery8 },
                ]
            },
            carousel: [
                [
                    { photo: alcioneImg, name: "Alcione", character: 'Intérprete' },
                    { photo: alineImg, name: "aline WIRLEY", character: 'Cantora e atriz' },
                    { photo: diogoImg, name: "Diogo Nogueira", character: 'Cantor e compositor' },
                    { photo: gracyaneImg, name: "GRACYANNE", character: 'Modelo' },
                    { photo: martinhoImg, name: "MARTINHO DA VILA", character: 'Cantor e compositor' },
                    { photo: alcioneImg, name: "Alcione", character: 'Intérprete' },
                    { photo: alineImg, name: "aline WIRLEY", character: 'Cantora e atriz' },
                    { photo: diogoImg, name: "Diogo Nogueira", character: 'Cantor e compositor' },
                    { photo: gracyaneImg, name: "GRACYANNE", character: 'Modelo' },
                    { photo: martinhoImg, name: "MARTINHO DA VILA", character: 'Cantor e compositor' },
                ],
                [
                    { photo: alcioneImg, name: "Alcione", character: 'Intérprete' }
                ],
                [
                    { photo: alcioneImg, name: "Alcione", character: 'Intérprete' }
                ],
                [
                    { photo: alcioneImg, name: "Alcione", character: 'Intérprete' }
                ]
            ],
            carouselTitle: "Convidados",
            citations: [
                { photo: citationSuburbanos1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'Martinho Da Vila' },
                { photo: citation1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'João José da Silva' },
            ]
        },
        {
            name: 'A Sogra Que Te Pariu',
            img: imgSogra,
            thumb: imgToDeGraca,
            signature: signatureSogra,
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: modalSogra,
                videoBackground: sograVideoBackground,
                gallery: [
                    { type: 'img', url: sogragallery1 },
                    { type: 'video', imgBackground: sogragallery2 },
                    { type: 'img', url: sogragallery3 },
                    { type: 'img', url: sogragallery4 },
                    { type: 'img', url: sogragallery5 },
                    { type: 'img', url: sogragallery6 },
                    { type: 'video', imgBackground: sogragallery7 },
                    { type: 'img', url: sogragallery8 },
                ]
            },
            carousel: [
                [
                    { photo: rodrigoImg, name: "Rodrigo Sant’Anna", character: 'Dona Isadir' },
                    { photo: barbaraImg, name: "Bárbara sut", character: 'Márcia' },
                    { photo: solangeImg, name: "Solange teixeira", character: 'Fátima' },
                    { photo: pedroImg, name: "Pedro Ottoni", character: 'Jonas' },
                    { photo: neyImg, name: "Ney Lima", character: 'Cezinha' },
                    { photo: rodrigoImg, name: "Rodrigo Sant’Anna", character: 'Dona Isadir' },
                    { photo: barbaraImg, name: "Bárbara sut", character: 'Márcia' },
                    { photo: solangeImg, name: "Solange teixeira", character: 'Fátima' },
                    { photo: pedroImg, name: "Pedro Ottoni", character: 'Jonas' },
                    { photo: neyImg, name: "Ney Lima", character: 'Cezinha' },
                ],
                [
                    { photo: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "Exemplo", character: 'De Troca' },
                ]
            ],
            carouselTitle: "Elenco",
            citations: [
                { photo: citation1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'João José da Silva' },
                { photo: citationSuburbanos1, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'Martinho Da Vila' },
            ]
        },
    ]


    const closeModals = () => {
        setOpenAbout(false)
        setOpenContact(false)
        setOpenProject(false)
        setOpenModalProject(false)
        setTimeout(function () {
            setActiveProject(null)
        }, 1000)
    }

    const closeVideo = () => {
        setVideoUrl(null)
    }

    useEffect(() => {
        if (videoUrl) {
            changeHeaderFunction(closeVideo)
        } else {
            changeHeaderFunction(null)
        }

    }, [videoUrl])

    useEffect(() => {
        if (openAbout || openContact || openProjectFinal || openModalProject || videoUrl) {
            setHeaderBackground(true)
            showScroll(false)
        } else {
            showScroll(true)
            setHeaderBackground(false)
        }
    }, [openAbout, openContact, openModalProject, openProjectFinal, videoUrl])

    useEffect(() => {
        if (activeProject !== null) {
            setOpenModalProject(true)
        }
    }, [activeProject])

    const [section, setSection] = useState(0)

    const nextSection = () => {
        console.log(componentList.length)
        if (section >= componentList.length) return
        setSection(section + 1)
    }

    const prevSection = () => {
        setSection(section - 1)
    }

    const changeHeaderFunction = (functionHeader) => {
        setHeaderFunction(() => functionHeader)
    }

    const navigation = (navTo) => {
        closeModals()
        setTimeout(function () {
            switch (navTo) {
                case 'home':
                    if (window.innerWidth > 758) {
                        setSection(0)
                    } else {
                        const section = document.getElementById('home')
                        setTimeout(function () {
                            section.scrollIntoView()
                        }, 900)
                    }
                    break
                case 'producer':
                    if (window.innerWidth > 758) {
                        setSection(1)
                    } else {
                        const sectionProducer = document.getElementById('producer')
                        setTimeout(function () {
                            sectionProducer.scrollIntoView()
                        }, 900)
                    }
                    break
                case 'projects':
                    if (window.innerWidth > 758) {
                        setSection(2)
                    } else {
                        setTimeout(function () {
                            const projects = document.getElementById('projects')
                            projects.scrollIntoView()
                        }, 900)
                    }
                    break
                case 'about':
                    setOpenAbout(true)
                    break
                case 'projectFinal':
                    setOpenProject(true)
                    break
                case 'contact':
                    setOpenContact(true)
                    break
                default:
                    break
            }
        }, 1000)
    }


    const componentList = [<About {...{ section, prevSection, nextSection }} />,
    <Projects  {...{ section, projects, prevSection, nextSection, setActiveProject }} />,
    <FinalPage {...{ prevSection, nextSection, navigation }}
    />]


    useEffect(() => {
        if (width < 768) {
            setStyleNav()
        } else {
            setStyleNav({ transform: `translateX(-${section * 100}%)` })
        }
    }, [width, section])


    const showScroll = (value) => {
        if (value === false) {
            document.documentElement.style.overflowY = 'hidden'
        } else {
            document.documentElement.style.overflowY = 'visible'
        }
    }

    useEffect(() => {
        if (width < 768) {
            setTimeout(() => {
                setShowSecondPart(true)
            }, 100)
        } else {
            setShowSecondPart(true)
        }
    }, [])



    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY
            const screenHeight = window.innerHeight
            const newScrollCount = Math.ceil((scrollValue + 400) / screenHeight)
            setSection(newScrollCount - 1)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Header section={section} headerFunction={headerFunction} navigation={navigation} headerbackground={headerbackground} showScroll={showScroll} />
            <div className="modals">
                <ModalAbout openAbout={openAbout} setOpenAbout={setOpenAbout} navigation={navigation} />
                <ContactModal openContact={openContact} setOpenContact={setOpenContact} navigation={navigation} />
                <ModalProjectFinal openProject={openProjectFinal} setOpenProject={setOpenProject} navigation={navigation} setVideoUrl={setVideoUrl} />
                <ModalVideo showVideo={videoUrl} videoUrl={videoUrl} />
                <ModalProject projectActiveIndex={activeProject} openModal={openModalProject} closeModal={closeModals} navigation={navigation} setVideoUrl={setVideoUrl} projects={projects} setActiveProject={setActiveProject} />
            </div>
            <div className='home' style={styleNav}  >
                <div className='main' id='home'>
                    <div className='main-btn__wrapper'>
                        <div className="btn-container">
                            <img className='main-btn' src={Logo} alt="" onClick={() => { width > 768 && nextSection() }} />
                        </div>
                        <div className="span-container">
                            <span>{width > 768 ? 'ME CLICA!' : 'ARRASTA AI!'}</span>
                        </div>
                    </div>
                    <div className="line-background"></div>
                    <div className='main-line'></div>
                    <div className='main-image-mobile'>
                        <img src={ImageTopMobile} alt="" className='img-top-1' />
                        <img src={ImageCenterMobile} alt="" className='img-center' />
                        <img src={ImageLowMobile} alt="" className='img-low' />
                    </div>
                    <div className='main-image'>
                        <div className="img-top-1-container">
                            <img src={ImageTop1} alt="" className='img-top-1' />
                        </div>
                        <div className="img-top-container">
                            <img src={ImageTop} alt="" className='img-top' />
                        </div>
                        <div className='background'></div>
                        <img src={ImageLeft} alt="" className='img-center' />
                        <div className='img-low-container'>
                            <img src={ImageLow} alt="" className='img-low' />
                        </div>
                    </div>
                </div>
                {showSecondPart &&
                    <>
                        {componentList.map((component) => (
                            <>
                                {component}
                            </>
                        ))}
                    </>}

                {/*  */}
            </div>
        </>
    )
}