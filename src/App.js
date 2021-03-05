import './App.css';
import { useState, useEffect } from 'react'
import Users from './Users'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((json) => setList(json))
  }, [])

  return (
    <div className="App">
      {
        list.map(data => (
          <Users
            name = {data.name}
            birthday = {data.birthday}
            status = {data.status}
            nickname = {data.nickname}
            portrayed = {data.portrayed}
            src = {data.img}
          />
        ))
      }
    </div>
  );
}

export default App;
