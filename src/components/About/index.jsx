

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import ImageUp from '../../assets/produtora.png'
import ImageBelow from '../../assets/sobreimagem.png'

export const About = ({ nextSection, prevSection }) => {

    return (
        <div className='about'>
            <div className='content'>
                <span className='about-text'>Sobre</span>
                <div className="controls">
                    <div className="first-line"></div>
                    <div className='control'>

                        <div className='ball-container'>
                            <button onClick={prevSection}><Prev /></button>
                            <Ball className='ball' />
                            <button onClick={nextSection}><Next /></button>
                        </div>

                    </div>
                    <div className="line"></div>
                </div>
            </div>
            <div className='container'>
                <div className="up">
                    <img src={ImageUp} alt="" />
                </div>
                <div className='low'>
                    <img src={ImageBelow} alt="" />
                    <div className="text">
                        <h2>A Produtora</h2>
                        <p>Rodrigo Sant'Anna foi criado na favela carioca Morro dos Macacos, em Vila Isabel, Zona Norte do Rio de Janeiro. Após se formar pela Casa das Artes de Laranjeiras, aos 24 anos, Rodrigo estreou, ao lado da atriz Thalita Carauta, o espetáculo Os Suburbanos, em que tanto dirigiu, escreveu e atuou. O espetáculo que atingiu o sucesso de crítica e público ficou cinco anos em cartaz.</p>
                    </div>
                </div>
            </div>
            <div className='background'></div>
        </div>
    )
}