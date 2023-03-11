import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import { useQuery } from 'react-query'

export function Home() {

  const [data, setData] = useState()

  const handleSubmit = async () => {
    // await axios.put('http://localhost:5000/bot')
    const res = await axios.get('http://localhost:5000/bot', {
      headers: {
        Authorization: "Bearer "
      }
    })
    setData(res.data)
  }

  console.log(data)

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Prefix:{" "}
          <input type="text" />
        </label>

        <button type='submit'>Enviar</button>
      </form> */}
      <button onClick={handleSubmit} >Clique</button>
    </div>
  );
}