import React from 'react'
import PhotoItem from '../PhotoItem/PhotoItem'
import styles from './GalleryGrid.module.css'
import img1 from '../../img/gallery/1.jpg'
import img2 from '../../img/gallery/2.jpg'
import img3 from '../../img/gallery/3.jpg'
import img4 from '../../img/gallery/4.jpg'
import img5 from '../../img/gallery/5.jpg'
import img6 from '../../img/gallery/6.jpg'

const GalleryGrid = () => {
  return (
    <div className={styles.gallery}>
      <PhotoItem src={img1}/>
      <PhotoItem src={img2} />
      <PhotoItem src={img3} />
      <PhotoItem src={img4} />
      <PhotoItem src={img5} />
      <PhotoItem src={img6} />
    </div>
  )
}

export default GalleryGrid