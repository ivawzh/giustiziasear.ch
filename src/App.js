
import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey500 } from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { InstantSearch, SearchBox, Hits, Pagination, InfiniteHits, PoweredBy } from 'react-instantsearch/dom';
import { connectSearchBox } from 'react-instantsearch/connectors';

const GIUSTIZIA_SEARCH = "giustizia-search";
const APP_ID = "2CVZTW5VOB";
const API_KEY = "a053bf374d1bac46fd8b15c47cb607c3";
const UFFICI = "uffici";

const mTheme = getMuiTheme({
  appBar: {
    color: blueGrey500,
  }
});

const GiustiziaSearchBox = ({ currentRefinement, refine }) =>
  <TextField
    style={searchBoxStyle}
    hintText="Cosa stai cercando?"
    value={currentRefinement}
    onChange={e => refine(e.target.value)}
  />
const ConnectedSearchBox = connectSearchBox(GiustiziaSearchBox);

function Ufficio({ hit }) {
  return (<Card style={cardStyle}>
    <CardHeader
      title={hit._nomeufficio}
      subtitle={hit.tipo}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      Indirizzo <strong>{hit.indirizzo}</strong> - <strong>{hit.cap}</strong>, <strong>{hit.comune}</strong><br />
      Email <strong>{hit.email}</strong><br />
      PEC <strong>{hit.pec}</strong><br />
      Sito web <strong>{hit.sitoweb}</strong><br />
      Telefono <strong>{hit.telefono}</strong><br />
      Fax <strong>{hit.fax}</strong><br />
      Codice fiscale <strong>{hit.codicefiscale}</strong><br />
      Codice ISTAT <strong>{hit.codiceistat}</strong>
    </CardText>
  </Card>);
};

const App = () => (
  <MuiThemeProvider muiTheme={mTheme}>
    <AppBar
      title={GIUSTIZIA_SEARCH}
      showMenuIconButton={false}
    />
    <InstantSearch
      appId={APP_ID}
      apiKey={API_KEY}
      indexName={UFFICI}
    >
      <ConnectedSearchBox />
      <InfiniteHits hitComponent={Ufficio}
      />
      <PoweredBy style={searchBoxStyle} />
    </InstantSearch>
  </MuiThemeProvider>
);

const cardStyle = {
  margin: 30
};

const searchBoxStyle = {
  marginTop: 30,
  marginLeft: 30,
  marginRight: 30
};

export default App;