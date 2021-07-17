import React from 'react'
import { filtersVar } from '../../cache/cache'
import { filtArray } from './hardcode'
import styles from './PhotoFilterBar.module.css'

const PhotoFilterBar = () => {
  const onInputChanged = (evt) => {
    const { checked, id } = evt.target
    const prevState = filtersVar()

    if (checked) {
      filtersVar([...prevState, id])
    }
    else {
      prevState.splice(prevState.indexOf(id), 1)
      filtersVar([...prevState])
    } 
  }

  return (
    <div className={styles.filter_bar}>
      <h2 className={styles.heading}>Фильтры</h2>
      <form className={styles.form}>
        {filtArray.map(({ id, name }) => {
          return (
            <div className={styles.checkbox} key={id}>
              <input
                className={styles.checkbox__input}
                type="checkbox"
                id={id}
                name={id}
                onChange={onInputChanged} />
              <label className={styles.checkbox__label} htmlFor={id}>{name}</label>
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default PhotoFilterBar
