
import styled from 'styled-components'
import SearchForm from './search-form'

const SearchStyled = styled.div`
    grid-area: search;
    border: 1px solid red;
    text-align: center;
`

function Search({setSearch}) {
    return (
        <SearchStyled>
            <SearchForm setSearch={setSearch} />
        </SearchStyled>
    )
}

export default Search
