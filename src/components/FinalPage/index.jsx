

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { Header } from '../Header/index.jsx'

export const FinalPage = ({ prevSection}) =>{
    return(
        <div className='final-page'>
            <Header />
            <div className='content'>
           
               
                <div className="controls">
                    <div className="first-line"></div>
                    <div className='control'>
                        <div className='ball-container'>
                            <button  onClick={prevSection}><Prev/></button>
                            <Ball className='ball'/>
                        </div>
                    </div>
                    <div className="custom-line">

                    <div className='ball-with-text'>
                      <span className='multi-text'>Quem Somos</span>
                      <span className='multi-text'>Contato</span>
                      <span className='multi-text'>Deu ruin</span>
                    </div>

                      <div className='line-wrap'>
                      <div className="line"></div>
                        <Ball className='ball'/>
                        <div className="line"></div>
                        <Ball className='ball'/>
                        <div className="line"></div>
                        <Ball className='ball'/>
                        <div className="line"></div>

                      </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}