
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
    button {
        background: var(--primary);
        font: var(--button);
        color: var(--white);
        border-radius: 0.5rem;
        padding-inline: 1rem;
        padding-block: .25rem;
        min-inline-size: 5rem;
        border: none;
        &:hover {
            cursor: pointer;
        }
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
                <button>
                    Search
                </button>
            </div>
        </SearchFormStyled>
    )
}

export default SearchForm
