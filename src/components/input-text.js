

import styled from 'styled-components'

const InputText = styled.input`
    border: 2px solid var(--primary);
    background: var(--bg);
    inline-size: 10rem;
    padding-inline: 1rem;
    padding-block: .5rem;
    font: var(--body2-regular);
    border-radius: .5rem;
    color: var(--white);
    flex: 1;
    @media screen and (max-width: 600px){
        flex: 0;
    }
`

export default InputText