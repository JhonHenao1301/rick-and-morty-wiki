
import styled from 'styled-components'
import Layout from '../components/layout';
import LayoutContent from '../components/layout-content';
import CardList from '../components/card-list';
import FiltersOthers from '../components/filters_others';
import Loader from '../components/loader';
import { useState, useEffect } from 'react'

const EpisodesStyled = styled.div`
    .title {
        display: flex;
        flex-direction: column;
        text-align: center;
        grid-area: search;
    }
`

function Episodes() {
    const [id, setId] = useState(1);
    const [fetchedData, updateFetchedData] = useState([]);
    const [results, setResults] = useState([]);
    const { name, air_date, episode } = fetchedData;
    const [loading, setLoading] = useState(false)
    let api = `https://rickandmortyapi.com/api/episode/${id}`
    useEffect(() => {
        (async function() {
          setLoading(true)
          let data = await fetch(api).then((res) => res.json())
          updateFetchedData(data)
          setLoading(false)
        
          setLoading(true)
          let characters_data = await Promise.all(
            (!data.characters) ? <p>No hay</p> :
            data.characters.map((item) => {
                return fetch(item).then((res) => res.json());
            })
          )
          setLoading(false)
          setResults(characters_data)
        //   console.log(characters_data)

        })();
    }, [api]);
    return (
        <EpisodesStyled>
            <Layout>
                <LayoutContent>
                    <div className="title">
                        <h1>Episode name: <span className='text-primary'></span> {name}</h1>
                        <p>Air Date: {air_date}</p>
                    </div>
                    <FiltersOthers total={51} setId={setId} module='Episode' />
                    {loading && <Loader />}
                    <CardList results={results} search='' status='' species='' gender=''/>
                </LayoutContent>
            </Layout>
        </EpisodesStyled>
    )
}

export default Episodes
