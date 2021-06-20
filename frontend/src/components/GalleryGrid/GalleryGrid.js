import React, { useEffect, useState } from 'react'
import PhotoItem from '../PhotoItem/PhotoItem'
import styles from './GalleryGrid.module.css'
import img1 from '../../img/gallery/1.jpg'
import img2 from '../../img/gallery/2.jpg'
import img3 from '../../img/gallery/3.jpg'
import img4 from '../../img/gallery/4.jpg'
import img5 from '../../img/gallery/5.jpg'
import img6 from '../../img/gallery/6.jpg'

const GalleryGrid = () => {
  const [img, setImg] = useState(null)

  useEffect(() => {
    const downloadImg = async () => {
      const response = await fetch('http://localhost:1337/galleries')
      const json = await response.json()
      console.log(json)
      setImg(json[0].img.url)
    }

    downloadImg()
  }, [])

  console.log(img)


  return (
    <div className={styles.gallery}>
      {/* {img && <PhotoItem src={`http://localhost:1337${img}`} />} */}
      <PhotoItem src={'http://localhost:4000/static/img/30387833.png'} />
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