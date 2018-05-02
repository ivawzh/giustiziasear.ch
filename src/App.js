
import React from 'react';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey500 } from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { InstantSearch, Hits, Pagination, InfiniteHits, PoweredBy } from 'react-instantsearch/dom';
import { connectSearchBox } from 'react-instantsearch/connectors';

const GIUSTIZIA_SEARCH = "giustiziasear.ch";
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
    floatingLabelText="Cosa stai cercando?"
    floatingLabelFixed={false}
    value={currentRefinement}
    onChange={e => refine(e.target.value)}
  />
const GiustiziaConnectedSearchBox = connectSearchBox(GiustiziaSearchBox);

function toHide(string) {
  return string === "";
}

function Ufficio({ hit }) {
  return (<Card style={cardStyle}>
    <CardHeader
      title={hit._nomeufficio}
      subtitle={hit.tipo}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <p className={toHide(hit.indirizzo) ? 'hidden' : ''}>indirizzo <strong>{hit.indirizzo}</strong> - <strong>{hit.cap}</strong>, <strong>{hit.comune}</strong></p>
      <p className={toHide(hit.email) ? 'hidden' : ''}>email <strong>{hit.email}</strong></p>
      <p className={toHide(hit.pec) ? 'hidden' : ''}>PEC <strong>{hit.pec}</strong></p>
      <p className={toHide(hit.sitoweb) ? 'hidden' : ''}>sito web <strong>{hit.sitoweb}</strong></p>
      <p className={toHide(hit.telefono) ? 'hidden' : ''}>telefono <strong>{hit.telefono}</strong></p>
      <p className={toHide(hit.fax) ? 'hidden' : ''}>fax <strong>{hit.fax}</strong></p>
      <p className={toHide(hit.codicefiscale) ? 'hidden' : ''}>codice fiscale <strong>{hit.codicefiscale}</strong></p>
      <p className={toHide(hit.codiceistat) ? 'hidden' : ''}>codice ISTAT <strong>{hit.codiceistat}</strong></p>
    </CardText>
  </Card >);
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
      <GiustiziaConnectedSearchBox />
      <Hits hitComponent={Ufficio}
      />
      <PoweredBy style={searchBoxStyle} />
    </InstantSearch>
    <p style={cardStyle}>a <a href="https://matteomanzinello.com" target="_blank">matteo manzinello</a> project</p>
  </MuiThemeProvider>
);

const cardStyle = {
  margin: 30
};

const searchBoxStyle = {
  width: "50%",
  marginTop: 30,
  marginLeft: 30,
  marginRight: 30
};

export default App;