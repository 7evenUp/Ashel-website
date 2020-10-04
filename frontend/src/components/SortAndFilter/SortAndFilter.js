import React from 'react'
import styles from './SortAndFilter.module.css'

const SortAndFilter = () => {
  return (
    <div className={`${styles.wrapper} card`}>
      <div>
        <h2 className={styles.heading}>Сортировать по:</h2>
        <select className={styles.sort_input}>
          <option>Дате (сначала старые)</option>
          <option>Дате (сначала новые)</option>
        </select>
      </div>
      <div className={styles.filter_wrapper}>
        <h2 className={styles.heading}>Фильтрация:</h2>
        <form className={styles.form}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="filter"
              value="soccer"/>Футбол
          </label>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="filter"
              value="soccer" />Работа
          </label>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="filter"
              value="soccer" />Повседневка
          </label>
          <button className={styles.button} type="button">Отфильтровать</button>
        </form>
      </div>
    </div>
  )
}

export default SortAndFilter