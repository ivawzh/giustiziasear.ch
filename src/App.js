
import React from 'react';
import ReactDOM from 'react-dom';

import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch/dom';
import Card from 'grommet/components/Card';

function Ufficio({ hit }) {
  return <div>{hit._nomeufficio}</div>;
}

const App = () => (
  <div>
    <InstantSearch
      appId="2CVZTW5VOB"
      apiKey="a053bf374d1bac46fd8b15c47cb607c3"
      indexName="uffici"
    >
      <SearchBox
        style={{ marginBottom: "20px" }}
      />
      <Hits hitComponent={Ufficio}
      />
      <Pagination />
    </InstantSearch>
  </div>
);

export default App;