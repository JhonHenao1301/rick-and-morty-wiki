
import styled from 'styled-components'
import InputText from './input-text'

const SearchFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    h1 {
        font-size: 2.5rem;
        font-weight: 500;
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

function SearchForm() {
    return (
        <SearchFormStyled>
            <h1>Character</h1>
            <div className="input-button">
                <InputText 
                    placeholder='Search for characters'
                />
                <button type='button' className='btn btn-primary'>
                    Search
                </button>
            </div>
        </SearchFormStyled>
    )
}

export default SearchForm
