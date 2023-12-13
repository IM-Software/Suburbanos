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

export const Home = () => {
    const [headerFunction, setHeaderFunction] = useState(null)

    const [openAbout, setOpenAbout] = useState(false)
    const [openContact, setOpenContact] = useState(false)
    const [openProject, setOpenProject] = useState(false)

    const closeModals = () => {
        setOpenAbout(false)
        setOpenContact(false)
        setOpenProject(false)
    }

    useEffect(() => {
        if (openAbout || openContact || openProject) {
            changeHeaderFunction(closeModals)
        } else {
            changeHeaderFunction(null)
        }
    }, [openAbout, openContact, openProject])

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
        setTimeout(function () {
            switch (navTo) {
                case 'home':
                    setSection(0)
                    break;
                case 'producer':
    
                    setSection(1)
                    break
                case 'projects':
                    setSection(2)
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
        }, 500)
    }


    const componentList = [<About {...{ section, prevSection, nextSection }} />,
    <Projects  {...{ prevSection, nextSection, changeHeaderFunction, navigation }} />,
    <FinalPage {...{ prevSection, nextSection, navigation }}
    />]

    return (
        <div className='home' style={{ transform: `translateX(-${section * 100}%)` }}>
            <Header section={section} headerFunction={headerFunction} navigation={navigation} />
            <div className='main'>
                <div className='main-btn__wrapper'>
                    <div className="btn-container">
                        <img className='main-btn' src={Logo} alt="" onClick={nextSection} />
                    </div>
                    <div className="span-container">
                        <span>ME CLICA!</span>
                    </div>
                </div>
                <div className='main-line'></div>
                <div className='main-image'>
                    <img src={ImageTop1} alt="" className='img-top-1' />
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
            {componentList.map((component) => component)}

            {/*  */}
            <div className="modals" style={{ transform: `translateX(${section * 100}%)` }}>
                <ModalAbout openAbout={openAbout} setOpenAbout={setOpenAbout} navigation={navigation} />
                <ContactModal openContact={openContact} setOpenContact={setOpenContact} navigation={navigation} />
                <ModalProjectFinal openProject={openProject} setOpenProject={setOpenProject} navigation={navigation} />
            </div>
        </div>
    )
}