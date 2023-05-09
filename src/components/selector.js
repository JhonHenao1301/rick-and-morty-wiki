
import styled from 'styled-components'

const SelectorStyled = styled.select`
    border: 1px solid var(--grey-20);
    border-radius: .5rem;
    background: var(--buttonBG);
    padding-inline: 1rem;
    block-size: 2.5rem;
    flex: 1;
    font: var(--buttonBG);
`

function Selector({children, setStatus, setSpecies, setGender, setId}) {
    
    function handleStatus(e) {
        if(setStatus) {
            setStatus(e.target.value)
        }
        if(setGender) {
            setGender(e.target.value)
        }
        if(setSpecies) {
            setSpecies(e.target.value)
        }
        if(setId) {
            setId(e.target.value)
        }
    }
    return (
        <SelectorStyled onChange={handleStatus}>
            {children}
        </SelectorStyled>
    )
}

export default Selector
