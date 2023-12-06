

import './styles.scss'

import { ReactComponent as Ball } from '../../assets/ball.svg'
import { ReactComponent as Next } from '../../assets/next.svg'
import { ReactComponent as Prev } from '../../assets/prev.svg'
import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Projects = ({ nextSection, prevSection }) => {

    const projects = [
        {
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            imgStream: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada asdasd a sdad  asd ad sad ada da dsad ad asd asd ads asd a dsaad a ddasd as easdad asdsasd asdds na emergente Barra da Tijuca, Zona Oeste da cidade.'
        },
        {
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            imgStream: 'https://logodownload.org/wp-content/uploads/2017/03/multishow-logo.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.'
        },
        {
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            imgStream: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, pela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.'
        },
        {
            img: 'https://telaviva.com.br/wp-content/uploads/2023/03/a-sogra-que-te-pariu.jpg',
            style: 'Sitcom',
            type: 'Série',
            imgStream: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
            text: 'Dona Isadir, uma senhora que, logo no início da pandemia, se encontra em uma situação inusitada: trocar seu modesto apartamento no bairro do Cachambi, Zona Norte do Rio de Janeiro, dadssad add adas dads dsad aadasdasdasdadsadada asd adpela mansão de seu filho Carlos, localizada na emergente Barra da Tijuca, Zona Oeste da cidade.'
        },
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
            <Swiper className="list-projects" pagination={{ clickable: true }} direction={'horizontal'} spaceBetween={'60'} slidesPerView={'auto'} style={{top: '19.5%'}}>
                {projects.map((project) => (
                    <SwiperSlide className='project'>
                        <img src={project.img} alt='' className='img-main'/>
                        <div className='stream'>
                            <p>{project.style} | {project.type}</p>
                            <img src={project.imgStream} alt="" />
                        </div>
                        <div>
                            <p>{project.text}</p>
                        </div>
                        <button>Ver Project</button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}