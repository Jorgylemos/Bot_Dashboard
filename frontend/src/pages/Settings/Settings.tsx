import { FetchData } from '../../hooks/FetchData'
import { PutData } from '../../hooks/PutData'
import { useContext, useState } from 'react'
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

  const [ isDisable, setDisable ] = useState<boolean>(false)

  const token = "admin"

  const { data, isError, isLoading } = FetchData<Props>('/bot/settings', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return (
    <Container>
      {isLoading && <Spinner />}
      { isDisable ? 
        (
        <>
          <form>
            <label>
              Bot atual: 
                <input type="text" disabled placeholder={data?.BotData.bot} />
            </label>
            <label>
              Prefixo atual:
                <input type="text" required style={{textAlign: 'center'}} placeholder={data?.BotData.prefix} />
            </label>
            <div>
              <button type='submit'>Enviar</button>
            </div>
        </form>
        <div>
          <button onClick={() => setDisable(false)}>Voltar</button>
        </div>
        </>
        )
      :  (
      <>
      <form>
          <label>
            Bot atual: 
              <input disabled type="text" placeholder={data?.BotData.bot} />
          </label>
          <label>
            Prefixo atual:
              <input disabled type="text" style={{textAlign: 'center'}} placeholder={data?.BotData.prefix} />
          </label>
        </form>
        <div>
          <button onClick={() => setDisable(true)}>Mudar</button>
        </div>
      </>

      ) 
      }
    </Container>
  )
}
