
import Layout from './components/layout';
import Header from './components/header';
import LayoutContent from './components/layout-content';
import Search from './components/search';
import Filters from './components/filters';
import CardList from './components/card-list';
import Pagination from './components/pagination';
// import Navbar from './components/navbar';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

function App() {
  return(
    <Router>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('')
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data)
      // console.log(data)
    })();
  }, [api]);

  // console.log(results)
  return (
    <Layout>
      <LayoutContent>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <Filters setStatus={setStatus} setSpecies={setSpecies} setGender={setGender}/>
        <CardList results={results} search={search} status={status} species={species} gender={gender} />
      </LayoutContent>
      <Pagination setPageNumber={setPageNumber} info={info}/>
    </Layout>
  )
}

export default App;
