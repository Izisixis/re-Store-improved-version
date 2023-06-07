import React from 'react'
import styles from './sidebar.module.scss'
import { Button } from '../Button'

export const Sidebar = () => {
  return (
    <>
      <div className={styles.root}>
        <div>
          <Button>
            <>
             <div>Category</div>
             <div>\/</div>
            </>
          </Button>
          <div className={styles.filtres}>
            <div>Woman</div>  
            <div>\/</div>  
          </div >
          <div className={styles.item}>
            <div className={styles.checkBox}>
              <input type='checkbox'/>
              <div className={styles.title}>Tops</div>
            </div>
            <p>345</p>
          </div><div className={styles.item}>
            <div className={styles.checkBox}>
              <input type='checkbox'/>
              <div className={styles.title}>Tops</div>
            </div>
            <p>345</p>
          </div><div className={styles.item}>
            <div className={styles.checkBox}>
              <input type='checkbox'/>
              <div className={styles.title}>Tops</div>
            </div>
            <p>345</p>
          </div>
          <div className={styles.filtres} ><div>Woman</div>  
            <div>\/</div>  </div >
          <div className={styles.filtres} ><div>Woman</div>  
            <div>\/</div>  </div >
          <div className={styles.filtres} ><div>Woman</div>  
            <div>\/</div>  </div >
          <div className={styles.filtres} ><div>Woman</div>  
            <div>\/</div>  </div >
        </div>
        <Button>Brands</Button>
        <Button>Price</Button>
        <Button>Size</Button>
      </div> 
    </>
  )
}
