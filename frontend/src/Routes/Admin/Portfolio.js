import React, { useState } from 'react'

import { useMutation, gql } from '@apollo/client'

import styles from './Portfolio.module.css'

const MUTATION = gql`
  mutation(
      $heading: String!,
      $text: String!,
      $file: Upload!,
      $stack: [String!]!) {
    addWork(
        heading: $heading,
        text: $text,
        file: $file,
        filter: $filter
    ) {
      code
      work {
        heading
        text
        stack
      }
    }
  }
`

export default function Portfolio() {
    const [image, setImage] = useState(null)
    const [heading, setHeading] = useState("")
    const [text, setText] = useState("")
    const [stackItem, setStackItem] = useState("")
    const [stack, setStack] = useState([])

    const [mutate, { loading, error }] = useMutation(MUTATION)

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const onHeadeingChange = evt => setHeading(evt.target.value)
    const onTextChange = evt => setText(evt.target.value)
    const onStackItemChange = evt => setStackItem(evt.target.value)
    const onStackItemAdd = () => setStack([...stack, stackItem])
    const OnFileChange = evt => setImage(evt.target.files[0])
    const onSubmit = () => {
        mutate({variables: {
            heading,
            text,
            stack,
            file: image
        }})
    }

    return (
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="heading">Заголовок</label>
            <input className={styles.input} id="heading" type="text" value={heading} onChange={onHeadeingChange}/>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="stackItem">Стэк технологий</label>
            <input className={styles.input} id="stackItem" type="text" value={stackItem} onChange={onStackItemChange}/>
            <button type="button" onClick={onStackItemAdd} disabled={stackItem.length ? false : true}>Добавить</button>
          </fieldset>
            
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="text">Содержимое</label>
            <textarea className={styles.textarea} id="text" value={text} onChange={onTextChange}></textarea>
          </fieldset>
            
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="photo">Фото</label>
            <input id="photo" name="fileUpload" type="file" onChange={OnFileChange}/>
          </fieldset>
        
          <button
            className={styles.button}
            type="button"
            onClick={onSubmit}>Окей</button>
        </form>
    )
}
