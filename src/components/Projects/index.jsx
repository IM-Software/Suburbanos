

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { Header } from '../Header/index.jsx'

export const Projects = ({nextSection, prevSection}) =>{
    return(
        <div className='projects'>
            <video className='background-video' loop autoPlay src='https://projects-temp.s3.sa-east-1.amazonaws.com/train.mp4'/>
            <Header />
            <div className='content'>
                <span className='about-text'>Projetos</span>
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