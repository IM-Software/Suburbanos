import { About } from '../../components/About'
import './styles.scss'
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

import { useWindowSize } from "@uidotdev/usehooks"
import axios from 'axios'

export const Home = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

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


    const closeModals = () => {
        setOpenAbout(false)
        setOpenContact(false)
        setOpenProject(false)
        setOpenModalProject(false)
        showScroll(true)
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




    const componentList = [
        <About section={section} prevSection={prevSection} nextSection={nextSection} data={data.about}/>,
        <Projects data={data.sectionProject} section={section} projects={data.allProjects} prevSection={prevSection} nextSection={nextSection} setActiveProject={setActiveProject} />,
        <FinalPage data={data.pageFinal} prevSection={prevSection} nextSection={nextSection} navigation={navigation} />
    ]


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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_URL_JSON)
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Erro ao obter dados:', error)
                setError(true)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {loading || error &&
                <div>
                    loading
                </div>
            }
            {!loading && !error &&
                <>
                    <Header section={section} headerFunction={headerFunction} navigation={navigation} headerbackground={headerbackground} showScroll={showScroll} logoUrl={data.logoMain.logoUrl} />
                    <div className="modals">
                        <ModalAbout data={data.whoWeAre} openAbout={openAbout} setOpenAbout={setOpenAbout} navigation={navigation} footer={data.footerModal}/>
                        <ContactModal data={data.contact} openContact={openContact} setOpenContact={setOpenContact} navigation={navigation} footer={data.footerModal}/>
                        <ModalProjectFinal data={data.projectFinal} openProject={openProjectFinal} setOpenProject={setOpenProject} navigation={navigation} setVideoUrl={setVideoUrl} footer={data.footerModal}/>
                        <ModalVideo showVideo={videoUrl} videoUrl={videoUrl} />
                        <ModalProject projectActiveIndex={activeProject} openModal={openModalProject} closeModal={closeModals} navigation={navigation} setVideoUrl={setVideoUrl} projects={data.allProjects} setActiveProject={setActiveProject} footer={data.footerModal}/>
                    </div>
                    <div className='home' style={styleNav}  >
                        <div className='main' id='home'>
                            <div className='main-btn__wrapper'>
                                <div className="btn-container">
                                    <img className='main-btn' src={data.logoMain.logoUrl} alt="" onClick={() => { width > 768 && nextSection() }} />
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
            }
        </>
    )
}