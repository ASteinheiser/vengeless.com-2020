import { useEffect, useState } from 'react'

import db from '../../firebase'

const About = () => {
  const [inputVal, setInputVal] = useState('')
  const [postData, setPostData] = useState([])

  useEffect(() => getPosts(), [])

  const getPosts = () => {
    db.collection('posts').get()
      .then(querySnapshot => {
        const posts = []
        querySnapshot.forEach(doc => {
          posts.push(doc.data())
        })

        setPostData(posts)
      })
      .catch(error => console.error('Error getting posts: ', error))
  }

  const handleClick = () => {
    const post = {
      title: inputVal
    }

    db.collection('posts').add(post)
      .then(() => {
        setInputVal('')
        getPosts()
      })
      .catch(error => console.error('Error adding post: ', error))
  }

  return (
    <div>
      <div>
        <h1>ABOUT PAGE!</h1>

        <input
          value={inputVal}
          onChange={({ target }) => setInputVal(target.value)}
        />

        <button onClick={handleClick}>
          Submit
        </button>
      </div>

      {postData.length > 0 ? (
        postData.map(post => (
          <div key={post.title}>
            <h1>{post.title}</h1>
          </div>
        ))
      ) : (
        <div>
          <h1>No data!</h1>
        </div>
      )}
    </div>
  )
}

export default About
