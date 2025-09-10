import React from 'react'
import btnStyle from './Button.module.css'

const Button = ({TEXT}) => {
  return (
    <button className={btnStyle.button}>{TEXT}</button>
  )
}

export default Button