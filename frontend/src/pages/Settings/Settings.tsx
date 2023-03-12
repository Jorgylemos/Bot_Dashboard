import { FetchData } from '../../hooks/FetchData'
import { PutData } from '../../hooks/PutData'
import { useContext } from 'react'
import { Container } from './style'
import { ThemeContext } from 'styled-components'
import { Spinner } from '../../components/spinner/Spinner'

type Props = {
  BotData: BotData
}

type BotData = {
  bot: string;
  prefix: string;
}

export function Settings() {

  // const { link } = useContext(ThemeContext)

  const token = "admin"

  const { data, isError, isLoading } = FetchData<Props>('/bot/settings', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return (
    <Container>
      {isLoading && <Spinner />}
      <form>
        <label>
          Bot atual: 
            <input disabled type="text" placeholder={data?.BotData.bot} />
        </label>
        <label>
          Prefixo atual:
            <input disabled type="text" style={{textAlign: 'center'}} placeholder={data?.BotData.prefix} />
        </label>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </Container>
  )
}
