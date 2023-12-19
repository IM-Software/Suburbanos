
import './style.scss'
import { ReactComponent as BorderLow } from '../../assets/perfil-borda.svg'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


export const CastCarousel = ({temps}) => {
    const [seasonActive, setSeasonActive] = useState(0)

    console.log(temps)

    return (
        <div className='cast'>
            <div className="controls">
                <h2>Elenco</h2>
                <div className='line'></div>
                <div className='seasons'>
                    {temps.map((season,index) =>(
                        <button onClick={() => setSeasonActive(index)} className={`${seasonActive === index ? 'active' : ''}`}>{index + 1}a Temporada</button>
                    ))}
                </div>
            </div>
            <Swiper className='images' pagination={{ clickable: true }} direction={'horizontal'} slidesPerView={'auto'}>
                {temps[seasonActive].map((actor) => (
                    <SwiperSlide className="actor">
                        <div className='photo'>
                            <div className='border-top'></div>
                            <BorderLow className='border-low' />
                            <img src={actor.photo} alt="Foto Ator" />
                        </div>
                        <div className='name'>
                            <h2>{actor.name}</h2>
                            <h3>"{actor.character}"</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}