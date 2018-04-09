
import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch/dom';

function Ufficio({ hit }) {
  return (<Card>
    <CardTitle title={hit._nomeufficio} subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Dettagli" />
    </CardActions>
  </Card>);
}

const App = () => (
  <MuiThemeProvider>
    <AppBar
      title="Giustizia search"
    />
    <InstantSearch
      appId="2CVZTW5VOB"
      apiKey="a053bf374d1bac46fd8b15c47cb607c3"
      indexName="uffici"
    >
      <SearchBox />
      <Hits hitComponent={Ufficio}
      />
      <Pagination />
    </InstantSearch>
  </MuiThemeProvider>
);

export default App;