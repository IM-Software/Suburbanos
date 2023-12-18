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

export const Home = () => {
    const [headerFunction, setHeaderFunction] = useState(null)

    const [openAbout, setOpenAbout] = useState(false)
    const [openContact, setOpenContact] = useState(false)
    const [openProjectFinal, setOpenProject] = useState(false)
    const [openModalProject, setOpenModalProject] = useState(false)
    const [activeProject, setActiveProject] = useState(null)
    const [videoUrl, setVideoUrl] = useState(null)

    const projects = [
        {
            name: 'Os Suburbanos',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            signature: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e76c0b28492973.55c37f38397bd.png',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://telaviva.com.br/wp-content/uploads/2022/06/os-suburbanos.jpg',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        },
        {
            name: 'To De Graça',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            signature: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e76c0b28492973.55c37f38397bd.png',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://logodownload.org/wp-content/uploads/2017/03/multishow-logo.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://telaviva.com.br/wp-content/uploads/2022/06/os-suburbanos.jpg',
            }
        },
        {
            name: 'A Sogra Que Te Pariu',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            signature: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e76c0b28492973.55c37f38397bd.png',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        },
        {
            name: 'Os Suburbanos',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            signature: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e76c0b28492973.55c37f38397bd.png',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        },
        {
            name: 'A Sogra Que Te Pariu',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            signature: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e76c0b28492973.55c37f38397bd.png',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        }
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

    const closeVideo = () =>{
        setVideoUrl(null)
    }

    useEffect(() => {
        if (openAbout || openContact || openProjectFinal || openModalProject) {
            changeHeaderFunction(closeModals)
        }

        if(videoUrl){
            changeHeaderFunction(closeVideo)
        }

        if(!videoUrl && !openAbout && !openContact && !openProjectFinal && !openModalProject){
            changeHeaderFunction(null)
        }

    }, [openAbout, openContact, openProjectFinal, videoUrl, openModalProject])

    useEffect(() =>{
        if(activeProject !== null){
            setOpenModalProject(true)
        }
    },[activeProject])

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
    <Projects  {...{ projects, prevSection, nextSection, setActiveProject }} />,
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
                <div className="line-background"></div>
                <div className='main-line'></div>
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
            {componentList.map((component) => component)}

            {/*  */}
            <div className="modals" style={{ transform: `translateX(${section * 100}%)` }}>
                <ModalAbout openAbout={openAbout} setOpenAbout={setOpenAbout} navigation={navigation} />
                <ContactModal openContact={openContact} setOpenContact={setOpenContact} navigation={navigation} />
                <ModalProjectFinal openProject={openProjectFinal} setOpenProject={setOpenProject} navigation={navigation} setVideoUrl={setVideoUrl}/>
                <ModalVideo showVideo={videoUrl} videoUrl={videoUrl}/>
                <ModalProject projectActiveIndex={activeProject} openModal={openModalProject} closeModal={closeModals} navigation={navigation} setVideoUrl={setVideoUrl} projects={projects} setActiveProject={setActiveProject}/>
            </div>
        </div>
    )
}