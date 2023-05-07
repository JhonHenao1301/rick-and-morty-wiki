
import styled from 'styled-components'

const LayoutContentStyled = styled.main`
    padding-inline: 4rem;
    padding-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;


    @media screen and (min-width: 768px) {
        padding-inline: 8rem;
        display: grid;
        grid-template-areas: "search search search" "filters item-list item-list";
        grid-template-columns: 278px 1fr 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
        row-gap: 1rem;
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
