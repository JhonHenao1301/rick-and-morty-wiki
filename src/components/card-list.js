
import styled from 'styled-components'
import Card from './card'

const CardListStyled = styled.div`
    grid-area: item-list;
    border: 1px solid red;
    padding-block: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1.5rem;
`

function CardList({ results, search }) {
    //I already know RESULTS is an Array
    if(results.length === 0) return <p>No characters found</p>

    // if (language !== "" && language !== 'all') {
    //     list = list.filter((item) => {
    //       if (item.language) {
    //         return item.language.toLowerCase() === language;
    //       }
    //     })
    // }
    if(search !== '') {
        results = results.filter((item) => {
            return item.name.search(search) >= 0
        })
    }

    // if(list.length === 0) {
    //     return <p>There are not repositories</p>
    // }
    return (
        <CardListStyled>
            {
                results.map((item) => {
                    return <Card {...item} key={item.id} />
                })
            }
        </CardListStyled>
    )
}

export default CardList
