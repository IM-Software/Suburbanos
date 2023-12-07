import './styles.scss'

import { ReactComponent as PlayButton } from '../../assets/play.svg'
import { CastCarousel } from '../CastCarousel'

export const ModalProject = ({ project }) => {

    return (
        <div className={`modal-project ${project ? 'active' : ''}`}>
            <img src={project?.modal.imgMain} alt="" className='img-main' />
            <div className='video'>
                <div className="image">
                    <img src={project?.modal.videoBackground} alt="" />
                </div>
                <PlayButton className='playButton' />
            </div>
            <div className='infos'>
                <h2>{project?.name}</h2>
                <div className='stream'>
                    <img src={project?.streamImg} alt="" />
                    <p>{project?.style}</p>
                    <div className="line"></div>
                    <p className='type'>{project?.type}</p>
                </div>
                <div className="texts">
                    <div className="text">
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <span className='text-secondary'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
                    </div>
                    <div className="people">
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                        </div>
                        <div className='names'>
                            <h3>Nome do cargo</h3>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                            <p>João da Silva</p>
                        </div>
                    </div>
                </div>
            </div>
            <CastCarousel/>
        </div>
    )
}