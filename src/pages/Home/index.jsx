import { About } from '../../components/About'
import './styles.scss'
import Logo from '../../assets/LogoSuburbanos.png'
import { Projects } from '../../components/Projects'
import { useState } from 'react'
import { FinalPage } from '../../components/FinalPage'

export const Home = () => {

 
    const [section, setSection] = useState(0)

    const nextSection = () => {
        console.log(componentList.length)
        if(section >= componentList.length) return
        setSection(section + 1)
    }

    const prevSection = () =>{
        setSection(section - 1)
    }

    const componentList = [<About {...{prevSection, nextSection}}/> ,
     <Projects  {...{prevSection, nextSection}}/>,
     <FinalPage {...{prevSection, nextSection}}
     />]

    return (
        <div className='home' style={{ transform: `translateX(-${section * 100}%)` }}>

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