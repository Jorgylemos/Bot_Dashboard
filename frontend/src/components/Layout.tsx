import { ReactNode, useEffect } from 'react'
import { Navbar } from './navbar/Navbar';

type Props = {
  title?: string;
  children?: ReactNode
}

export function Layout({ title, children }: Props) {

  useEffect(() => {
    document.title = title || ""
    document.addEventListener('selectstart', (e) => {
      e.preventDefault()
    })
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
  }, [title])

  return (
    <>
      {children}
    </>
  )
}
