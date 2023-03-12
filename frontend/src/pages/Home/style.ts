import styled from "styled-components";

export const Container = styled.div`
    margin-top: 18vh;
    text-align: center;
`

export const Title = styled.h1`

    margin-top: 10vh;
    font-size: 10vh;
    
    span {
        font-size: 8vh;
    }

`

export const Apresentation = styled.div`
    margin-top: 2.5rem;

    button {
        cursor: pointer;
        margin-top: 1.5rem;
        font-weight: 800;
        letter-spacing: 1px;

        border-radius: 6px;
        background-color: rgba(0,0,0,0.2);
        padding: 10px;

        :hover {
            background-color: rgba(0,0,0,0.3);
        }

        :active {
            transform: translateY(4px)
        }
    }
`