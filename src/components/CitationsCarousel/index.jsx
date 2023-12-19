import './style.scss'

import { useState } from 'react'
import { ReactComponent as CitationBackground } from '../../assets/citação-background.svg'
import { ReactComponent as CitationLine } from '../../assets/citação-linha.svg'
import { ReactComponent as Arrow } from '../../assets/rightarrow.svg'


export const CitationsCarousel = ({citations}) => {
    const [citationIndex, setCitationIndex] = useState(0)
    const [animationCitation, setAnimationCitation] = useState(true)


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