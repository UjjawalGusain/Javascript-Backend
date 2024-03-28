import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [jokes, setJokes] = useState([]);

  // We are using axios to send the get request to the api to 
  // get the data. We can also use fetch to do the same but axios 
  // gives some more functionalities.

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <h1>This is a joke website</h1>
      <h2>Number of jokes: {jokes.length}</h2>
      {
        jokes.map((joke, index) => (
          <h3 key={joke.id} style={{fontWeight: 100}}>Joke {index}: {joke.content}</h3>
        ))
      }
    </>
  )
}

export default App
