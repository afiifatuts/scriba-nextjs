import React from 'react'
import sytles from './button.module.css'
import Link from 'next/link'

const Button = ({text,url}) => {
  return (
    <div >
        <Link href={url}>
        <button className={sytles.button}>{text}</button>
        </Link>
    </div>
  )
}

export default Button