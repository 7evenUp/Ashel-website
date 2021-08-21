import React, { useState } from 'react'

import { useMutation, gql } from '@apollo/client'

const MUTATION = gql`
  mutation($heading: String!, $text: String!, $file: Upload!, $filter: String!) {
    addPost(
        heading: $heading,
        text: $text,
        file: $file,
        filter: $filter
    ) {
      code
      post {
        heading
        text
        filter
      }
    }
  }
`

export default function Blog() {
    const [image, setImage] = useState(null)
    const [heading, setHeading] = useState("")
    const [text, setText] = useState("")
    const [filter, setFilter] = useState("")

    const [mutate, { loading, error }] = useMutation(MUTATION)

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const onHeadeingChange = evt => setHeading(evt.target.value)
    const onTextChange = evt => setText(evt.target.value)
    const onFilterChange = evt => setFilter(evt.target.value)
    const OnFileChange = evt => setImage(evt.target.files[0])
    const onSubmit = () => {
        console.log(heading)
        console.log(text)
        console.log(filter)
        mutate({variables: {
            heading,
            text,
            filter,
            file: image
        }})
    }

    return (
        <form>
            <label htmlFor="heading">Заголовок</label>
            <input id="heading" type="text" value={heading} onChange={onHeadeingChange}/>

            <label htmlFor="text">Содержимое</label>
            <textarea id="text" value={text} onChange={onTextChange}></textarea>

            <label htmlFor="filter">Фильтр</label>
            <select id="filter" value={filter} onChange={onFilterChange}>
                <option value="soccer">Футбол</option>
                <option value="programing">Программирование</option>
                <option value="daily">Повседневка</option>
            </select>

            <label htmlFor="photo">Фото</label>
            <input id="photo" name="fileUpload" type="file" onChange={OnFileChange}/>
        
            <button type="button" onClick={onSubmit}>Окей</button>
        </form>
    )
}
