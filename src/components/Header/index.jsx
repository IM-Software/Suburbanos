import React, { useEffect, useState } from 'react';
import './styles.scss';


import { ReactComponent as MenuBtn } from '../../assets/btn-menu.svg'
import { ReactComponent as MenuBtnClose } from '../../assets/menu-close.svg'

export const Header = ({ section, headerFunction, navigation, headerbackground, showScroll, logoUrl }) => {
  const [open, setOpen] = useState(false)
  const [iconClose, setIconClose] = useState(false)
  const [styleNav, setStyleNav] = useState(null)


  const clickButton = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open === true || (typeof headerFunction === 'function')) {
      setIconClose(true)
      showScroll(false)
    } else {
      showScroll(true)
      setIconClose(false)
    }
  }, [headerFunction, open])

  const navigationTo = (navTo) => {
    navigation(navTo)
    setOpen(false)
  }

  return (
    <>
      <header className={`header ${section > 0 ? 'animation' : ''}`} >
        <img className={`header-logo ${open || headerbackground ? 'active' : ''} `} src={logoUrl} alt="" />
        <div className={`btns ${open ? 'active' : ''} ${headerbackground ? 'background' : ''}`}>
          {!iconClose ? (
            <MenuBtn className='menu-btn' onClick={headerFunction ? headerFunction : clickButton} />
          ) : (
            <MenuBtnClose className='menu-btn close' onClick={headerFunction ? headerFunction : clickButton} />
          )}
        </div>
      </header>
      <div className={`menu ${open ? 'open' : ''}`} style={styleNav}>
        <div className='background'></div>
        <div className='itens'>
          <p onClick={() => navigationTo('home')}>Home</p>
          <p onClick={() => navigationTo('producer')}>A Produtora</p>
          <p onClick={() => navigationTo('projects')}>Projetos</p>
          <p onClick={() => navigationTo('about')}>Quem Somos</p>
          <p onClick={() => navigationTo('projectFinal')}>Deu Ruim</p>
          <p onClick={() => navigationTo('contact')}>Contato</p>
        </div>
      </div>
    </>
  )
}