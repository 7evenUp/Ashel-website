import React from 'react'
import styles from './Gallery.module.css'
import { filtArray } from './hardcode'
import img11 from '../../img/gallery/11.jpg'
import img12 from '../../img/gallery/12.jpg'
import img3 from '../../img/gallery/3.jpg'
import img4 from '../../img/gallery/4.jpg'
import img5 from '../../img/gallery/5.jpg'
import img6 from '../../img/gallery/6.jpg'

const Gallery = () => {
  return (
    <>
      <div className={styles.filter_bar}>
        <h2 className={styles.heading}>Фильтры</h2>
        <form className={styles.form}>
          {filtArray.map(({id, name}) => {
            return (
              <div className={styles.checkbox} key={id}>
                <input className={styles.checkbox__input} type="checkbox" id={id} />
                <label className={styles.checkbox__label} htmlFor={id}>{name}</label>
              </div>
            )
          })}
        </form>
      </div>
      <div className={styles.gallery}>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={img11} alt="work"/>
          <span className={styles.photo__date}>20.10.2020</span>
        </div>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={img12} alt="work"/>
          <span className={styles.photo__date}>21.10.2020</span>
        </div>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={img3} alt="work"/>
          <span className={styles.photo__date}>22.10.2020</span>
        </div>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={img4} alt="work"/>
          <span className={styles.photo__date}>23.10.2020</span>
        </div>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={img5} alt="work"/>
          <span className={styles.photo__date}>24.10.2020</span>
        </div>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={img6} alt="work"/>
          <span className={styles.photo__date}>25.10.2020</span>
        </div>
      </div>
    </>
  )
}

export default Gallery