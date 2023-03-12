import { useContext } from 'react'
import { Container, Title, Apresentation } from './style'
import { ThemeContext } from 'styled-components'
import Light from '../../styles/themes/Light'
import Dark from '../../styles/themes/Dark'

export function Home() {

  const { title, color } = useContext(ThemeContext)

  return (
    <Container>
      <Title style={{color: color }}>
        B<span>💣</span>t Dashb<span>💥</span>ard
      </Title>
      <Apresentation>
        <h2>Boas vindas ao bot dashboard</h2>
        <button>Clique</button>
      </Apresentation>
      <div>
        <table style={{width: '100%', marginTop: '4rem'}}>
          <tr>
            <th>Light Pallet</th>
            <th>Dark Pallet</th>
          </tr>
          <tr>
            <td>
              <ul>
                <li style={{filter: "drop-shadow(2px 2px 1px rgba(0,0,0,0.4))", color: Light.background}}>#8ea1e1</li>
                <li style={{filter: "drop-shadow(2px 2px 1px rgba(0,0,0,0.4))", color: Light.navbar}}>#b58bd8</li>
                <li style={{filter: "drop-shadow(2px 2px 1px rgba(0,0,0,0.4))", color: Light.link}}>#f7b801</li>
              </ul>
            </td>  
            <td>
              <ul>
                <li style={{filter: "drop-shadow(2px 2px 1px rgba(0,0,0,0.2))", color: Dark.background}} >#4f5b93</li>
                <li style={{filter: "drop-shadow(2px 2px 1px rgba(0,0,0,0.2))", color: Dark.navbar}} > #5c4378</li>
                <li style={{filter: "drop-shadow(2px 2px 1px rgba(0,0,0,0.2))", color: Dark.link}} > #d39917</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </Container>
  )
}
