

import styled from 'styled-components'

const InputText = styled.input`
    border: 2px solid var(--primary);
    background: var(--bg);
    padding-inline: 1rem;
    padding-block: .5rem;
    inline-size: 20rem;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 1px 3px 9px;
    color: var(--grey-30);
    font: var(--body2-regular);
    &:hover {
        border: 3px solid var(--primary);
    }

    @media screen and (max-width: 600px){
    }
`

export default InputText