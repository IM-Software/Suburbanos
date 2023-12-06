

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { Header } from '../Header'

export const About = ({nextSection, prevSection}) =>{
    return(
        <div className='about'>
           <Header/>
           
            <div className='content'>
                <span className='about-text'>Sobre</span>
                <div className="controls">
                    <div className="first-line"></div>
                    <div className='control'>
                       
                        <div className='ball-container'>
                            <button  onClick={prevSection}><Prev/></button>
                            <Ball className='ball'/>
                            <button onClick={nextSection}><Next /></button>
                        </div>
               
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}