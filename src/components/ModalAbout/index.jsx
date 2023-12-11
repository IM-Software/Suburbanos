import './styles.scss'

import Logo from '../../assets/LogoSuburbanos.png';
import ImageMain from '../../assets/09_12_21_Os Suburbanos_Foto Fabrizia Granatieri_191 1.png'
import ImageSecondary from '../../assets/sobreimagem.png'
import { ReactComponent as LineTop } from '../../assets/sobre-linha-topo.svg'
import { ReactComponent as LineLow } from '../../assets/sobre-linha-baixo.svg'
import { ReactComponent as Path } from '../../assets/sobre-path.svg'
import { ReactComponent as Balls } from '../../assets/reticula.svg'
import { FooterModals } from '../FooterModals';

export const ModalAbout = () => {

    const cards = [
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { img: "https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg", name: "José do Nascimento Silva", profession: "Designer", textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", textSecondary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ]

    return (
        <div className='modal-about'>
            <div className='text-primary'>
                <Balls className='balls'/>
                <div className="image">
                    <img src={ImageMain} alt="" />
                </div>
                <div className='text'>
                    <h2>RODRIGO SANT’ANNA</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
            </div>
            <div className='text-secondary'>
                <Balls className='balls'/>
                <div className='text'>
                    <h3>Os Suburbanos</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
                <div className='image'>
                    <Path className='path' />
                    <img src={ImageSecondary} alt="" />
                </div>
            </div>
            <div className='photos'>
                <h3>Quem somos</h3>
                <div className='cards'>
                    {cards.map((card) => (
                        <div className="card">
                            <img src={card.img} alt={card.name} />
                            <div className="infos">
                                <h4>{card.name}</h4>
                                <p className='profession'>{card.profession}</p>
                                <p>{card.textOne} <span>{card.textSecondary}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterModals/>
        </div>
    )
}