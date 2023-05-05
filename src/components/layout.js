
import styled from 'styled-components'

const LayoutStyled = styled.div`
    min-block-size: 100vh;
    margin: 0;
`

function Layout({children}) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
