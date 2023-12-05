import { About } from '../../components/About'
import './styles.scss'
import Logo from '../../assets/LogoSuburbanos.png'
import { Projects } from '../../components/Projects'
import { useState } from 'react'

export const Home = () => {
    const [section, setSection] = useState(0)

    const nextSection = () => {
        setSection(section + 1)
    }

    const prevSection = () =>{
        setSection(section - 1)
    }

    return (
        <div className='home' style={{ transform: `translateX(-${section * 100}%)` }}>
            <div className='main'>
                <img src={Logo} alt="" onClick={nextSection} />
                <div className='line'></div>
            </div>
            <About nextSection={nextSection}  prevSection={prevSection}/>
            <Projects />
        </div>
    )
}