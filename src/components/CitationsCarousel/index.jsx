import './style.scss'

import { useState } from 'react'
import { ReactComponent as CitationBackground } from '../../assets/citação-background.svg'
import { ReactComponent as CitationLine } from '../../assets/citação-linha.svg'
import { ReactComponent as Arrow } from '../../assets/rightarrow.svg'


export const CitationsCarousel = () => {
    const [citationIndex, setCitationIndex] = useState(0)
    const [animationCitation, setAnimationCitation] = useState(true)

    const citations = [
        { photo: 'https://s2-g1.glbimg.com/Fbx46S8zDQBCX2KYxoHyPUnPEhQ=/0x0:980x551/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/n/g/BK6kJESNyaf5XuLvLefw/os-suburbanos.jpg', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem beatae vitae dicta sunt explicabo.', name: 'João José da Silva' },
        { photo: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/10/priscila-enquadramento-capa-2.jpg', text: 'Lorem perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium', name: ' Lorem' },
        { photo: 'https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.', name: 'Maria' },
        { photo: 'https://i.pinimg.com/236x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima placeat eius ex nisi laborum ipsam atque aliquam vero beatae, nobis recusandae neque doloremque totam suscipit! Voluptatem quod optio aliquid.', name: 'João' },
        { photo: 'https://s2-globofilmes.glbimg.com/74bCVN8sMCJ-AyyVzZjPCYIIyew=/0x0:2248x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2022/K/r/JUsYZyQAum4ax55HXBng/22-2086-1.jpg', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima placeat eius ex nisi laborum ipsam atque aliquam vero beatae, nobis recusandae neque doloremque totam suscipit! Voluptatem quod optio aliquid.', name: 'Maria' }  
    ]


    const nextCitation = () => {
        if (citations.length - 1 > citationIndex) {
            setCitationIndex(citationIndex + 1)
            setAnimationCitation(false)
            setTimeout(function () {
                setAnimationCitation(true)
            }, 1)
        }

    }

    const prevCitation = () => {
        if (citationIndex !== 0) {
            setCitationIndex(citationIndex - 1)
            setAnimationCitation(false)
            setTimeout(function () {
                setAnimationCitation(true)
            }, 1)
        }
    }

    return (
        <div className='citation-container'>
            <div className='citation'>
                <div className='photo'>
                    <div className='background-photo'></div>
                    <div className='image'>
                        {animationCitation &&
                            <img src={citations[citationIndex].photo} alt={citations[citationIndex].name} />
                        }
                    </div>
                    <div className='text'>
                        <p>“{citations[citationIndex].text}”</p>
                        <p className='name'>{citations[citationIndex].name}</p>
                    </div>
                </div>
                <CitationLine className='line' />
                <CitationBackground className='background' />
            </div>
            <div className='controls'>
                <Arrow className='arrow-left' onClick={prevCitation} />
                <Arrow className='arrow' onClick={nextCitation} />
            </div>
        </div>
    )
}