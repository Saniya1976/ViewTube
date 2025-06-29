import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log('Error fetching jokes:', error);
      });
  }, []);  // ✅ Add empty dependency array to run only once on mount

  return (
    <>
      <h1>Hello World</h1>
      <h2>Jokes Count: {jokes.length}</h2>

      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>ID: {joke.id}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;