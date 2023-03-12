import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

export const Spinner = () => {

  const { link, navbar } = useContext(ThemeContext)

const Style = styled.div`
  .spinner {
    display: flex;
    margin: auto;
    margin-top: 2rem;
    border-radius: 140px;
    border-top: 10px ${navbar} solid !important;
    border: 10px ${link} solid;
    width: 60px;
    height: 60px;
    padding: 10px;
}

.spinner {
    animation: 3s loading infinite linear;
}

@keyframes loading {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`

  return (
    <Style>
      <div className="spinner"></div>
    </Style>
  )
}