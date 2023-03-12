import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20vh;
    text-align: center;

    label {
        margin-right: 2rem;
        input {
            margin-left: 1rem;
        }
    }

    button {
        cursor: pointer;
        margin-top: 2.4rem;
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

    input {
        background-color: inherit;
        border: 1.4px #f7b801 solid;
        background: rgba(0,0,0,0.1);
        border-radius: 6px;
        padding: 5px;
        color: #f7b801;
        ::placeholder {
            color: #f7b801;
        }
    }
`

