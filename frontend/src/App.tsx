import React from 'react'
import { useQuery, gql } from '@apollo/client'

interface Post {
  _id: number
  heading: string
  text: string
  created: number
  photoUrl: string
}

interface PostsData {
  posts: Post[]
}

const GET_POSTS = gql`
  query GetPosts {
    posts {
      _id
      heading
      text
    }
  }
`

const App = () => {
  const { loading, error, data} = useQuery<PostsData>(GET_POSTS)
  return (
    <>
      <h1>Hello world!</h1>
      { error ? (<p>{error.message}</p>) : <b>No Errors</b>}
      { loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data && data.posts.map(post => (
            <li>
              <h3>{post.heading}</h3>
              <p>{post.text}</p>
              <i>{post._id}</i>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App
