

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Projects = ({ nextSection, prevSection, setActiveProject }) => {

    const projects = [
        {
            name: 'A Sogra Que Te Pariu',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://m.media-amazon.com/images/S/pv-target-images/50b9cc3c2a21ad87ef61cea17d70478b923a7f48d543911a34a24ce1847d87e5.jpg',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        },
        {
            name: 'A Sogra Que Te Pariu',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://logodownload.org/wp-content/uploads/2017/03/multishow-logo.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://m.media-amazon.com/images/S/pv-target-images/50b9cc3c2a21ad87ef61cea17d70478b923a7f48d543911a34a24ce1847d87e5.jpg',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        },
        {
            name: 'A Sogra Que Te Pariu',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        },
        {
            name: 'A Sogra Que Te Pariu',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        },
        {
            name: 'A Sogra Que Te Pariu',
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            streamImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.',
            modal: {
                imgMain: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
                videoBackground: 'https://pbs.twimg.com/media/FRYEtIsWYAU_OCy.jpg:large',
            }
        }
    ]

    return (
        <div className='projects'>
            <video className='background-video' loop autoPlay src='https://projects-temp.s3.sa-east-1.amazonaws.com/train.mp4' />
            <div className='content'>
                <span className='about-text'>Projetos</span>
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
            <div className='custom-swapper' >
            <Swiper className="list-projects" pagination={{ clickable: true }} direction={'horizontal'} spaceBetween={'50'} slidesPerView={'auto'}>
                {projects.map((project) => (
                    <SwiperSlide className='project'>
                        <img src={project.img} alt='' className='img-main'/>
                        <div className='stream'>
                            <p>{project.style} | </p>
                            <p className='type'>{project.type}</p>
                            <img src={project.streamImg} alt="" />
                        </div>
                        <div className='project-text'>
                            <p>{project.text}</p>
                        </div>
                        <button onClick={() => setActiveProject(project)}>Ver Projeto</button>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}