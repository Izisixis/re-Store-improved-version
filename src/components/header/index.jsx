import React from 'react'
import styles from './header.module.scss'
import { Button } from '../Button'


export const Header = () => {
  return (
    <header className={styles.root}>
        <div><img className={styles.logo} src="/logotipe.jpg"/></div>
        <div className='middleBlock'>
            <nav>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </nav>
        </div>
        <div className='rightBlock'>
            <input type="text" />
            <button>chaket</button>
            <button>favourites</button>
        </div>
    </header>
  )
}
