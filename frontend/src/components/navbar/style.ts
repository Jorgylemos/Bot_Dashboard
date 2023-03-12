import styled from "styled-components";

export const Nav = styled.nav`
    color: #fff;
    padding: 20px;
    box-shadow: 4px 4px 10px rgba(0,0,0,0.2);
    
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    li {
        margin: 0 10px;
    }
    
    a {
        color: #fff;
        text-decoration: none;
        filter: drop-shadow(4px 4px 2px rgba(0,0,0,0.3))
    }

    a:hover {
        background-color: rgba(0,0,0,0.3) !important;
        padding: 6px;
        border-radius: 5px;
    }
`

