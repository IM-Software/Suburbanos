import { About } from '../../components/About'
import './styles.scss'
import Logo from '../../assets/LogoSuburbanos.png'
import { Projects } from '../../components/Projects'
import { useState } from 'react'
import { FinalPage } from '../../components/FinalPage'
import { Header } from '../../components/Header'

export const Home = () => {
    const [headerFunction, setHeaderFunction] = useState(null)
 
    const [section, setSection] = useState(0)

    const nextSection = () => {
        console.log(componentList.length)
        if(section >= componentList.length) return
        setSection(section + 1)
    }

    const prevSection = () =>{
        setSection(section - 1)
    }

    const changeHeaderFunction = (functionHeader) =>{
        setHeaderFunction(() => functionHeader)
    }

    const componentList = [<About {...{prevSection, nextSection}}/> ,
     <Projects  {...{prevSection, nextSection, changeHeaderFunction}}/>,
     <FinalPage {...{prevSection, nextSection, changeHeaderFunction}}
     />]

    return (
        <div className='home' style={{ transform: `translateX(-${section * 100}%)` }}>
            <Header section={section} headerFunction={headerFunction}/>
            <div className='main'>
                <div className='main-btn__wrapper'>
                    <img className='main-btn' src={Logo} alt="" onClick={nextSection} />
                    <span>ME CLICA!</span>
                </div>
                <div className='main-line'></div>
            </div>
            {componentList.map((component) => component)}
            
            {/*  */}
        </div>
    )
}