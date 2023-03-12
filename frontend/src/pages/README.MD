import { useState } from 'react'
import { PutData } from '../hooks/PutData'
import { Spinner } from '../components/spinner/Spinner';
import { FetchData } from '../hooks/FetchData';

type Props = {
  BotData: BotData
}

type BotData = {
  bot: string;
  prefix: string;
}

export function Home() {

  const [prefix, setPrefix] = useState<string>('')

  const token: string = "admin"

  const { state, handleSubmit } = PutData('/bot/settings/update', { prefix: prefix }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })

  const { data, isError, isLoading } = FetchData<Props>('/bot/settings', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return (
    <div>
      
      {isLoading ? <Spinner /> : (
        <>
          <h1>Bot atual: {data?.BotData.bot}</h1>
          <h3>Prefixo atual: {data?.BotData.prefix}</h3>
        </>
      )}

      {state.isLoading && <Spinner /> }
      <input type="text" onChange={(e) => setPrefix(e.target.value)} />
      <button onClick={handleSubmit}>Clique</button>
    </div>
  );
}