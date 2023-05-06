
import Layout from './components/layout';
import Header from './components/header';
import LayoutContent from './components/layout-content';
import Search from './components/search';
import Filters from './components/filters';
import CardList from './components/card-list';
import { useState, useEffect } from 'react';
// import { getUser } from './components/services/data'

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('')
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  // const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data)
    })();
  }, [api]);
  
  return (
    <Layout>
      <Header />
      <LayoutContent>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <Filters />
        <CardList results={results} search={search}/>
      </LayoutContent>
    </Layout>
  )
}

export default App;
