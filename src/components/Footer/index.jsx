import React from 'react'
import * as S from './footer.module.scss'
import './footer.module.scss'
// import './footer.css'

const Footer = (props) => {
  return (
    <>
      <h1 className={S.green}>{props.titleFooter}</h1>
      <h1 className="green">{props.titleFooter}</h1>
    </>
  )
}

export default Footer