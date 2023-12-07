
import './style.scss'
import { ReactComponent as BorderLow } from '../../assets/perfil-borda.svg'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


export const CastCarousel = () => {
    const [seasonActive, setSeasonActive] = useState(0)
    
    const seasons = [
        [
            { name: 'Rodrigo Sant’Anna', character: 'Dona Isadir' },
            { name: 'Lorem Impsum', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
        ],
        [
            { name: 'Lorem Impsum', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
            { name: 'Lorem', character: 'Lorem' },
        ]
    ]

    return (
        <div className='cast'>
            <div className="controls">
                <h2>Elenco</h2>
                <div className='line'></div>
                <div className='seasons'>
                    {seasons.map((season,index) =>(
                        <button onClick={() => setSeasonActive(index)} className={`${seasonActive === index ? 'active' : ''}`}>{index + 1}a Temporada</button>
                    ))}
                </div>
            </div>
            <Swiper className='images' pagination={{ clickable: true }} direction={'horizontal'} slidesPerView={'auto'}>
                {seasons[seasonActive].map((actor) => (
                    <SwiperSlide className="actor">
                        <div className='photo'>
                            <div className='border-top'></div>
                            <BorderLow className='border-low' />
                            <img src="https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg" alt="Foto Ator" />
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