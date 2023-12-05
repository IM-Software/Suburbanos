import './styles.scss'
import backgroundAbout from '../../assets/background-sobre.png'


export const About = ({nextSection, prevSection}) =>{
    return(
        <div className='about'>
            <div className='background'>
                <img src={backgroundAbout} alt="" />
            </div>
            <div className='content'>
                <div className="controls">
                    <div className='control'>
                        <button onClick={prevSection}>anterior</button>
                        <div className='ball'></div>
                        <button onClick={nextSection}>proximo</button>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}