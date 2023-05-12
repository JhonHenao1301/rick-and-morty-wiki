
import styled from 'styled-components'

const LayoutContentStyled = styled.main`
    padding-inline: 2rem;
    padding-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;


    @media screen and (min-width: 762px) {
        padding-inline: 4rem;
        display: grid;
        grid-template-areas: "search search search" "filters item-list item-list";
        grid-template-columns: 278px 1fr 1fr;
        grid-template-rows: auto 1fr;
    }

    @media screen and (min-width: 1048px) {
        padding-inline: 6rem;
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
