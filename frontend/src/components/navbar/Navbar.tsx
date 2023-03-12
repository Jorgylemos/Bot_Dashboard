import { Nav } from './style'
import Switch from 'react-switch'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Link } from 'react-router-dom'

import { TbSunFilled, TbMoonFilled } from 'react-icons/tb'

type Props = {
  toggleTheme(): void;
}

export function Navbar({ toggleTheme }: Props) {

  const { title, navbar, link } = useContext(ThemeContext)

  return (
    <Nav style={{
      backgroundColor: navbar
      }}>
        <ul>
          <li><Link style={{color: link}} to="/home">🏠 Inicio</Link></li>
          <li><Link style={{color: link}} to="/commands">📝 Comandos</Link></li>
          <li><Link style={{color: link}} to="/settings">🔧 Configurações</Link></li>
          <li>
            
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={true}
                uncheckedIcon={true}
                onColor={"#BFBFBF"}
                offColor={"#FDB813"}
                height={10}
                width={40}
                handleDiameter={20}
            />
            <span style={{float: 'left', color: '#FDB813'}}>{title === 'light' && <TbSunFilled /> }</span>
            <span style={{float: 'right', color: '#BFBFBF'}}>{title === 'dark' && <TbMoonFilled /> }</span>
          </li>
        </ul>
    </Nav>
  )
}
