
import Layout from './components/layout';
import Header from './components/header';
import LayoutContent from './components/layout-content';
import Search from './components/search';

function App() {
  return (
    <Layout>
      <Header />
      <LayoutContent>
        <Search />
      </LayoutContent>
    </Layout>
  )
}

export default App;
