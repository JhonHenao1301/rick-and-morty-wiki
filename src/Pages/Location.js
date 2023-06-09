
import styled from 'styled-components'
import Layout from '../components/layout'
import LayoutContent from '../components/layout-content'
import FiltersOthers from '../components/filters_others'
import CardList from '../components/card-list'
import Loader from '../components/loader'
import { useState, useEffect } from 'react'

const LocationStyled = styled.div`
    .title {
        display: flex;
        flex-direction: column;
        text-align: center;
        grid-area: search;
    }
    p {
        margin: 0;
        margin-block: .5rem;
    }
`

function Location() {
    const [id, setId] = useState(1);
    const [data, updateFetchedData] = useState([]);
    const [results, setResults] = useState([]);
    const { name, type, dimension } = data;
    const [loading, setLoading] = useState(false)
    let api = `https://rickandmortyapi.com/api/location/${id}`

    useEffect(() => {
        (async function() {
            setLoading(true)
            let data = await fetch(api).then((res) => res.json())
            updateFetchedData(data)
            setLoading(false)
        
            setLoading(true)
            let characters_data = await Promise.all(
                // (!data.residents) ? setError(true) :
                // setError(false)
                data.residents.map((item) => {
                    return fetch(item).then((res) => res.json());
                })
            )
            setResults(characters_data)
            //   console.log(data.residents)
            setLoading(false)
        })();
    }, [api]);
    return (
        <LocationStyled>
            <Layout>
                <LayoutContent>
                    <div className="title">
                        <h1>
                            Episode name: <span className='text-primary'>{name}</span> 
                        </h1>
                        <p>Dimension: {dimension}</p>
                        <p>Type: {type}</p>
                    </div>
                    <FiltersOthers total={126} setId={setId} module='Location' />
                    {loading && <Loader />}
                    <CardList results={results} search='' status='' species='' gender=''/>
                </LayoutContent>
            </Layout>
        </LocationStyled>
    )
}

export default Location
