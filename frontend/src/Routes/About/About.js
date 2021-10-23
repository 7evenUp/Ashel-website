import React from 'react'
import { IoLogoVk, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoGithub, IoMail  } from 'react-icons/io5'
import styles from './About.module.css'
import MyImage from '../../img/me.jpg'

const About = () => {
  return (
    <>
      <h1 className={styles.heading}>Привет, меня зовут Артём</h1>
      <section className={styles.section}>
        <div className="card">
          <img className={styles.img} src={MyImage} alt="it is me" />
          <p className={styles.paragraph}>Voluptatem incidunt nulla ut dolor dolor porro provident inventore. Deserunt perspiciatis et tenetur et ut mollitia itaque nam. Ducimus nisi voluptas amet possimus et. Numquam recusandae sed rem sunt expedita quis quo. Veniam sed et eius provident hic.</p>
          <p className={styles.paragraph}>Ea est sit tempore quia consequatur nam earum ipsum. Et totam consequatur quia. Dignissimos accusamus consequuntur voluptatem et similique nihil et iure excepturi. Culpa quaerat eaque sequi facilis. Omnis assumenda aliquam. Nam et quia.</p>
          <p className={styles.paragraph}>Explicabo repudiandae reprehenderit quo quo. Incidunt hic quia labore voluptatem laborum quia porro velit. Nulla sint commodi voluptas doloremque voluptate.</p>
        </div>
        <div className={styles.right_size}>
          <div className="card">
            <h2 className={styles.card_heading}>Я занимаюсь</h2>
            <ul className={styles.skills_list}>
              <li>- Веб-разработкой</li>
              <li>- Футболом</li>
              <li>- Своим youtube-каналом</li>
              <li>- UI/UX дизайном</li>
            </ul>
          </div>

          

          <div className="card">
            <h2 className={styles.card_heading}>Мои контакты</h2>
            <ul className={styles.contacts_list}>
              <li><a className={styles.contacts_item} href="https://vk.com/aptem_oxa" target="blank"><IoLogoVk size={32}/> Вконтакте</a></li>
              <li><a className={styles.contacts_item} href="https://www.instagram.com/7_even_up/" target="blank"><IoLogoInstagram size={32} /> Instagram</a></li>
              <li><a className={styles.contacts_item} href="https://www.youtube.com/channel/UChojN6dPfAgXI88-27ey8AQ" target="blank"><IoLogoYoutube size={32} /> Youtube</a></li>
              <li><a className={styles.contacts_item} href="https://twitter.com/_7even_up_" target="blank"><IoLogoTwitter size={32} /> Twitter</a></li>
              <li><a className={styles.contacts_item} href="https://github.com/7evenUp" target="blank"><IoLogoGithub size={32} /> Github</a></li>
              <li><a className={styles.contacts_item} href="mailto:sheludeshev.artyom@mail.ru" target="blank"><IoMail size={32} /> Email</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default About