
import styled from 'styled-components'
import Links from './links'

const HeaderStyled = styled.header`
    background: var(--grey-10);
    display: flex;
    justify-content: space-between;
    padding-inline: 8rem;
    h1 {
        font: var(--headline1);
    }
`

function Header() {
    return (
        <HeaderStyled>
            <h1>Rick & Morty Wiki</h1>
            <Links />
        </HeaderStyled>
    )
}

export default Header
