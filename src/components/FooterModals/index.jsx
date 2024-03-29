import './styles.scss'

import { ReactComponent as FooterRectangle } from '../../assets/footer-retangulo.svg'

import Balls from '../../assets/reticula.png'
import ImgHover from '../../assets/footer-hover.png'

export const FooterModals = ({ navigation, toggleModal, data }) => {

    const navigationTo = (navTo) => {
        toggleModal()
        setTimeout(function () {
            navigation(navTo)
        }, 500)
    }

    return (
        <div className="footer-modals">
            <img src={Balls} alt="Balls" className='balls' />
            <div className='background'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1835" height="832" viewBox="0 0 1835 832" fill="none" className='img-background'>
                    <path d="M53.7286 716.937L0.919234 130.704C0.415204 125.109 4.61778 120.197 10.2236 119.829L1824.11 0.715042C1829.97 0.33063 1834.89 5.0446 1834.76 10.9097L1817.22 822.104C1817.1 827.779 1812.29 832.214 1806.62 831.87L63.0823 726.021C58.1474 725.721 54.1722 721.861 53.7286 716.937Z" fill="#EF6A00" />
                </svg>
                <img src={data.imageBackground} alt="" />
            </div>
            <div className='text'>
                <div className="nav">
                    <div className='item'>
                        <img src={ImgHover} alt="" />
                        <p onClick={() => navigationTo('producer')}>Sobre</p>
                    </div>
                    <div className='item'>
                        <img src={ImgHover} alt="" />
                        <p onClick={() => navigationTo('about')}>Quem Somos</p>
                    </div>
                    <div className='item'>
                        <img src={ImgHover} alt="" />
                        <a href={data.linkTerms} target='_blank'><p>Termos e Condições</p></a>
                    </div>
                    <div className='item'>
                        <img src={ImgHover} alt="" />
                        <a href={data.policyLink} target='_blank'><p>Política de privacidade</p></a>
                    </div>
                    <div className='item'>
                        <img src={ImgHover} alt="" />
                        <p onClick={() => navigationTo('contact')}>Contato</p>
                    </div>
                    <div className='social'>
                        <a href={data.linkFacebook} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.1429 0H2.85714C1.28 0 0 1.28 0 2.85714V21.1429C0 22.72 1.28 24 2.85714 24H21.1429C22.72 24 24 22.72 24 21.1429V2.85714C24 1.28 22.72 0 21.1429 0ZM18.8571 8.57143H17.7143C16.4914 8.57143 16 8.85714 16 9.71429V11.4286H18.8571L18.2857 14.2857H16V22.8571H13.1429V14.2857H10.8571V11.4286H13.1429V9.71429C13.1429 7.42857 14.2857 5.71429 16.5714 5.71429C18.2286 5.71429 18.8571 6.28571 18.8571 6.28571V8.57143Z" fill="white" />
                            </svg>
                        </a>
                        <a href={data.linkYoutube} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
                                <path d="M33.4201 3.75519C33.0276 2.27706 31.8709 1.11294 30.4024 0.717875C27.7405 0 17.0667 0 17.0667 0C17.0667 0 6.39294 0 3.731 0.717875C2.26244 1.113 1.10581 2.27706 0.71325 3.75519C0 6.43437 0 12.0243 0 12.0243C0 12.0243 0 17.6141 0.71325 20.2933C1.10581 21.7714 2.26244 22.8871 3.731 23.2821C6.39294 24 17.0667 24 17.0667 24C17.0667 24 27.7404 24 30.4024 23.2821C31.8709 22.8871 33.0276 21.7714 33.4201 20.2933C34.1334 17.6141 34.1334 12.0243 34.1334 12.0243C34.1334 12.0243 34.1334 6.43437 33.4201 3.75519ZM13.5758 17.0994V6.94906L22.4969 12.0244L13.5758 17.0994Z" fill="white" />
                            </svg>
                        </a>
                        <a href={data.linkInstagram} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M12.1391 5.8467C8.73314 5.8467 5.98584 8.594 5.98584 12C5.98584 15.406 8.73314 18.1533 12.1391 18.1533C15.5451 18.1533 18.2924 15.406 18.2924 12C18.2924 8.594 15.5451 5.8467 12.1391 5.8467ZM12.1391 16.0004C9.93809 16.0004 8.13869 14.2064 8.13869 12C8.13869 9.7936 9.93274 7.99955 12.1391 7.99955C14.3455 7.99955 16.1396 9.7936 16.1396 12C16.1396 14.2064 14.3402 16.0004 12.1391 16.0004ZM19.9794 5.595C19.9794 6.39295 19.3367 7.03024 18.5441 7.03024C17.7462 7.03024 17.1089 6.38759 17.1089 5.595C17.1089 4.80241 17.7515 4.15977 18.5441 4.15977C19.3367 4.15977 19.9794 4.80241 19.9794 5.595ZM24.0548 7.05166C23.9637 5.12909 23.5246 3.42608 22.1161 2.02298C20.713 0.619882 19.01 0.180743 17.0875 0.0843468C15.106 -0.0281156 9.16692 -0.0281156 7.18544 0.0843468C5.26823 0.175388 3.56523 0.614526 2.15677 2.01763C0.748315 3.42073 0.314532 5.12373 0.218136 7.0463C0.105673 9.02778 0.105673 14.9669 0.218136 16.9483C0.309177 18.8709 0.748315 20.5739 2.15677 21.977C3.56523 23.3801 5.26287 23.8193 7.18544 23.9157C9.16692 24.0281 15.106 24.0281 17.0875 23.9157C19.01 23.8246 20.713 23.3855 22.1161 21.977C23.5193 20.5739 23.9584 18.8709 24.0548 16.9483C24.1672 14.9669 24.1672 9.03314 24.0548 7.05166ZM21.4949 19.0744C21.0772 20.1241 20.2686 20.9327 19.2136 21.3558C17.6337 21.9824 13.885 21.8378 12.1391 21.8378C10.3933 21.8378 6.6392 21.977 5.06472 21.3558C4.01508 20.9381 3.20642 20.1294 2.78335 19.0744C2.15677 17.4946 2.30137 13.7458 2.30137 12C2.30137 10.2542 2.16213 6.50006 2.78335 4.92558C3.20106 3.87593 4.00972 3.06728 5.06472 2.6442C6.64455 2.01763 10.3933 2.16222 12.1391 2.16222C13.885 2.16222 17.6391 2.02298 19.2136 2.6442C20.2632 3.06192 21.0719 3.87058 21.4949 4.92558C22.1215 6.50541 21.9769 10.2542 21.9769 12C21.9769 13.7458 22.1215 17.4999 21.4949 19.0744Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                    <p className='rights'>© OS SUBURBANOS, Inc. 2023.</p>
                </div>
                <FooterRectangle className='rectangle' />
            </div>
            <div className="img-right">
                <img src={data.imageText} alt="" />
            </div>
        </div>
    )
}