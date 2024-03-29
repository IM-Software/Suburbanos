import './styles.scss'

import { FooterModals } from '../FooterModals'
import { useEffect, useRef } from 'react'
import Balls from '../../assets/reticula.png'

export const ContactModal = ({ data, openContact, setOpenContact, navigation, footer }) => {
    const modalRef = useRef(null)

    useEffect(() => {
        if (modalRef.current && !openContact) {
            setTimeout(function () {
                modalRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }, 1000)
        }
    }, [openContact])


    return (
        <div className={`contact-modal ${openContact ? 'active' : ''}`} ref={modalRef}>
            <div className='contact-container'>
                <img src={Balls} alt="" className='balls' />
                <div>
                    <h2>{data.title}</h2>
                    <p className='secondary'>{data.email}</p>
                    <p className='three'>{data.number}</p>
                    <div className='flex'>
                        <a href={data.youtube} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="78" viewBox="0 0 110 78" fill="none">
                                <path d="M107.701 12.2044C106.436 7.40045 102.709 3.61705 97.9763 2.33309C89.398 0 55 0 55 0C55 0 20.6022 0 12.0237 2.33309C7.29105 3.61725 3.56365 7.40045 2.29856 12.2044C0 20.9117 0 39.0788 0 39.0788C0 39.0788 0 57.2459 2.29856 65.9533C3.56365 70.7572 7.29105 74.383 12.0237 75.6669C20.6022 78 55 78 55 78C55 78 89.3978 78 97.9763 75.6669C102.709 74.383 106.436 70.7572 107.701 65.9533C110 57.2459 110 39.0788 110 39.0788C110 39.0788 110 20.9117 107.701 12.2044ZM43.7499 55.5732V22.5845L72.4998 39.0792L43.7499 55.5732Z" fill="#FFD100" />
                            </svg>
                        </a>
                        <a href={data.instagram} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                                <path d="M42.0094 20.4635C30.091 20.4635 20.4776 30.079 20.4776 42C20.4776 53.921 30.091 63.5365 42.0094 63.5365C53.9277 63.5365 63.5411 53.921 63.5411 42C63.5411 30.079 53.9277 20.4635 42.0094 20.4635ZM42.0094 56.0016C34.3074 56.0016 28.0109 49.7224 28.0109 42C28.0109 34.2776 34.2887 27.9984 42.0094 27.9984C49.7301 27.9984 56.0078 34.2776 56.0078 42C56.0078 49.7224 49.7113 56.0016 42.0094 56.0016ZM69.4441 19.5825C69.4441 22.3753 67.1953 24.6058 64.4219 24.6058C61.6297 24.6058 59.3997 22.3566 59.3997 19.5825C59.3997 16.8084 61.6484 14.5592 64.4219 14.5592C67.1953 14.5592 69.4441 16.8084 69.4441 19.5825ZM83.7049 24.6808C83.3863 17.9518 81.8496 11.9913 76.9211 7.08044C72.0114 2.16959 66.0522 0.632601 59.3247 0.295214C52.3911 -0.0984045 31.6089 -0.0984045 24.6753 0.295214C17.9665 0.613857 12.0074 2.15084 7.07886 7.0617C2.15036 11.9726 0.63246 17.9331 0.295148 24.6621C-0.0983826 31.5972 -0.0983826 52.384 0.295148 59.3192C0.61372 66.0482 2.15036 72.0087 7.07886 76.9196C12.0074 81.8304 17.9478 83.3674 24.6753 83.7048C31.6089 84.0984 52.3911 84.0984 59.3247 83.7048C66.0522 83.3861 72.0114 81.8492 76.9211 76.9196C81.8309 72.0087 83.3675 66.0482 83.7049 59.3192C84.0984 52.384 84.0984 31.616 83.7049 24.6808ZM74.7474 66.7605C73.2857 70.4342 70.456 73.2645 66.7643 74.7453C61.2361 76.9383 48.1185 76.4322 42.0094 76.4322C35.9003 76.4322 22.7639 76.9196 17.2544 74.7453C13.5815 73.2833 10.7518 70.453 9.27139 66.7605C7.07886 61.2311 7.58483 48.1105 7.58483 42C7.58483 35.8895 7.0976 22.7502 9.27139 17.2395C10.7331 13.5658 13.5627 10.7355 17.2544 9.25471C22.7826 7.0617 35.9003 7.56778 42.0094 7.56778C48.1185 7.56778 61.2549 7.08044 66.7643 9.25471C70.4373 10.7167 73.2669 13.547 74.7474 17.2395C76.9399 22.7689 76.4339 35.8895 76.4339 42C76.4339 48.1105 76.9399 61.2498 74.7474 66.7605Z" fill="#FFD100" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='download'>
                    <h2>{data.titleDownloads}</h2>
                    {data.downloads.map((download) =>(
                        <a href={download.link} target='_blank'>
                            <p className='three'>{download.text}</p>
                        </a>
                    ))}
                </div>
                <div className='club'>
                    <h2>{data.titleClub}</h2>
                    <div className='flex'>
                        <img src={data.logoClub} alt="Logo Club" />
                        <a href={data.linkClub} target='_blank'><p className='three'>{data.textClub}</p></a>
                    </div>
                </div>
                <div>
                    <h2>{data.titleSend}</h2>
                    <p className='three'>{data.subtitleSend} <a href={data.linkSend} target='_blank'>{data.linkText}</a></p>
                </div>
                <div className='terms'>
                    <h2>{data.titleTerms}</h2>
                    <a href={data.linkTerms} target='_blank'>
                        <p className='three'>{data.termsText}</p>
                    </a>
                    <a href={data.policyLink} target='_blank'>
                        <p className="three">{data.policyText}</p>
                    </a>
                </div>
            </div>
            <FooterModals navigation={navigation} toggleModal={setOpenContact} data={footer} />
        </div>
    )
}