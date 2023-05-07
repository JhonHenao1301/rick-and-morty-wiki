
import styled from 'styled-components'
import Links from './links'

const HeaderStyled = styled.header`
    background: var(--grey-10);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2rem;
    block-size: 4rem;
    position: sticky;
    top: 0;
    h1 {
        font: var(--headline1);
    }
    @media screen and (min-width: 768px) {
        padding-inline: 8rem;
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
