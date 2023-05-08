
import styled from 'styled-components'
import Card from './card'

const CardListStyled = styled.div`
    /* border: 1px solid red; */
    grid-area: item-list;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 1.5rem;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 240px));
    }
`

function CardList({ results, search, status, species, gender }) {
    //I already know RESULTS is an Array
    let list = results
    if(!list) return <p>No characters found</p>
    
    // Function to filter by Status
    if (status !== "") {
        list = list.filter((item) => {
          if (item.status) {
            return item.status.toLowerCase() === status;
          }
          return null
        })
    }

    // Function to filter by Status
    if (gender !== "") {
        list = list.filter((item) => {
          if (item.gender) {
            return item.gender.toLowerCase() === gender;
          }
          return null
        })
    }

    // Function to filter by Species
    if (species !== "") {
        list = list.filter((item) => {
          if (item.species) {
            return item.species.toLowerCase() === species;
          }
          return null
        })
    }

    //Functions to find the character by his name
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
