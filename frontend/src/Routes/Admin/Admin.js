import React, { useState } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'

const QUERY = gql`
  query GetData {
    posts {
      heading
      text
      filter
      created
    }
    works {
      heading
      text
      created
    }
    gallery {
      created
    }
  }
`

const MUTATION = gql`
  mutation($file: Upload!, $filter: String!) {
    addGalleryItem(
      file: $file,
      filter: $filter
    ) {
      code
      galleryItem {
        filter
        created
      }
    }
  }
`

const Admin = () => {
  const [image, setImage] = useState(null)

  const [mutate, { loading, error }] = useMutation(MUTATION)

  // const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error :(</p>
    }

  // console.log(data)

  const OnFileChange = evt => setImage(evt.target.files[0])

  const onSubmit = () => {
    mutate({variables: {file: image, filter: "programing"}})
  }

  return (
    <>
      <header>
        <h1>Админ панель</h1>
      </header>
      <main>
        <form>
          <span>Загрузи фотку</span>
          <input name="fileUpload" type="file" onChange={OnFileChange}/>
          <button type="button" onClick={onSubmit}>Submit</button>
        </form>
      </main>
    </>
  )
}

export default Admin