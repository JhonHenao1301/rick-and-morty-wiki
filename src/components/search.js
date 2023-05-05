
import styled from 'styled-components'
import InputText from './input-text'

const SearchStyled = styled.div`
    grid-area: search;
    border: 1px solid red;
    text-align: center;
`

function Search() {
    return (
        <SearchStyled>
            <h1>Character</h1>
            <InputText />
            <button>
                Search
            </button>
        </SearchStyled>
    )
}

export default Search
