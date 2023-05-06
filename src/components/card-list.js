
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
    let list = results
    if(!list) return <p>No characters found</p>

    // if (language !== "" && language !== 'all') {
    //     list = list.filter((item) => {
    //       if (item.language) {
    //         return item.language.toLowerCase() === language;
    //       }
    //     })
    // }
    if(search !== '') {
        list = list.filter((item) => {
            return item.name.toLowerCase().search(search) >= 0
        })
    }
    return (
        <CardListStyled>
            {
                list.map((item) => {
                    return <Card {...item} key={item.id} />
                })
            }
        </CardListStyled>
    )
}

export default CardList
