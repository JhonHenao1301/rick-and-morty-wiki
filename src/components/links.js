

import styled from 'styled-components'

const LinksStyled = styled.nav`
    border: 1px solid red;
    display: flex;
    
    .link-list {
        display: inherit;
        gap: 1.5rem;
        align-items: center;
        padding-inline: 0;
        padding-block: 1rem;
        margin: 0;
    }
    .link-list > li {
        display: inherit;
        list-style: none;
       
    }
    .link-list > li > a {
        font: var(--headline2-light);
        color: var(--grey-30);
        text-decoration: none;
        display: flex;
        align-items: center;
    justify-content: center;
        &:hover {
            color: var(--black);
        }
        &:active {
            color: var(--primary);
            text-decoration: underline;
            font-weight: 500;
        }
    }
    
`

function Links() {
    return (
        <LinksStyled>
            <ul className='link-list'>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Episode</a></li>
                <li><a href="#">Location</a></li>
            </ul>
        </LinksStyled>
    )
}

export default Links
