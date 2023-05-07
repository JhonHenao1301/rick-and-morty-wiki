
import styled from 'styled-components'
import InputText from './input-text'

const SearchFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    h2 {
        font: var(--headline2-bold);
    }
    .input-button {
        display: inherit;
        gap: 2rem;
        justify-content: center;
    }
    .btn {
        color: var(--white);
        padding-inline: 1rem;
        min-inline-size: 6rem;
        border: none;
    }
`

function SearchForm({ setSearch,setPageNumber }) {
    function handleInputChange(event) {
        setPageNumber(1)
        setSearch(event.target.value)
    }
    function handleButtonChange(event) {
        event.preventDefault()
    }
    return (
        <SearchFormStyled>
            <h2>Character</h2>
            <div className="input-button">
                <InputText 
                    placeholder='Search for characters'
                    onChange={handleInputChange}
                />
                <button 
                    type='button' 
                    className='btn btn-primary'
                    onClick={handleButtonChange}
                >
                    Search
                </button>
            </div>
        </SearchFormStyled>
    )
}

export default SearchForm
