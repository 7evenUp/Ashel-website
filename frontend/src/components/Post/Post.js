import React from 'react'
import styles from './Post.module.css'
import img from '../../img/Rectangle 13.png'

const Post = () => {
  return (
    <div className={`${styles.post} card`}>
      <div>
        <h2 className={styles.heading}>Cambridgeshire interactive</h2>
        <p className={styles.paragraph}>Voluptate ex rerum praesentium nobis. Doloremque incidunt rerum. Modi voluptatem sit quas.</p>
        <p className={styles.paragraph}>Et nostrum quia fugiat in commodi iure esse. Vel animi consequatur. Dolor fugit molestiae. Vel architecto</p>
        <p className={styles.paragraph}>Sit eveniet sed ipsa vitae. Qui placeat quo maiores ea quia atque ut. Sint eum voluptas praesentium. Omnis libero nam officiis totam impedit totam non. Sed esse repudiandae temporibus excepturi.</p>
      </div>
      <div className={styles.br}></div>
      <div className={styles.right}>
        <img src={img} alt="img" className={styles.img}/>
        <button type="button" className={styles.button}>Подробнее</button>
      </div>
    </div>
  )
}

export default Post