
import styled from 'styled-components'

const LayoutContentStyled = styled.main`
    padding-inline: 8rem;
    padding-block: 2rem;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-areas: "search search search" "filters item-list item-list";
        grid-template-columns: 278px 1fr 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
    }
`

function LayoutContent({children}) {
    return (
        <LayoutContentStyled>
            {children}
        </LayoutContentStyled>
    )
}

export default LayoutContent
