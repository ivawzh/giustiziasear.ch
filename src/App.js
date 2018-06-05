import React from 'react';

import './App.css';

import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classnames from 'classnames';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { InstantSearch, Hits, Pagination, InfiniteHits, PoweredBy } from 'react-instantsearch/dom';
import { connectSearchBox } from 'react-instantsearch/connectors';

const GIUSTIZIA_SEARCH = "giustiziasear.ch";
const APP_ID = "2CVZTW5VOB";
const API_KEY = "a053bf374d1bac46fd8b15c47cb607c3";
const UFFICI = "uffici";

this.state = {
  expanded: false
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[500],
    },
    background: {
      default: '#fff'
    }
  },
});

const GiustiziaSearchBox = ({ currentRefinement, refine }) =>
  <TextField
    id="full-width"
    label="ricerca real-time"
    InputLabelProps={{
      shrink: true,
    }}
    type="search"
    value={currentRefinement}
    onChange={e => refine(e.target.value)}
    placeholder="...se la risposta è 'amore' la domanda qual è?"
    fullWidth
    margin="normal"
  />;

const GiustiziaConnectedSearchBox = connectSearchBox(GiustiziaSearchBox);

function toHide(string) {
  return string === "";
}

function handleExpandClick() {

}

function Ufficio({ hit }) {

  return (<div>
    <Card style={styles.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" style={styles.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        style={styles.media}
        image="/static/images/cards/paella.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with
          your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions style={styles.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body2">
            Method:
          </Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and
            cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
            Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
            the rice, and cook again without stirring, until mussels have opened and rice is
            just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>);
}

/*
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
      <p className={toHide(hit.email) ? 'hidden' : ''}>email <a href={'mailto:' + hit.email}><strong>{hit.email}</strong></a></p>
      <p className={toHide(hit.pec) ? 'hidden' : ''}>PEC <a href={'mailto:' + hit.pec}><strong>{hit.pec}</strong></a></p>
      <p className={toHide(hit.sitoweb) ? 'hidden' : ''}>sito web <strong>{hit.sitoweb}</strong></p>
      <p className={toHide(hit.telefono) ? 'hidden' : ''}>telefono <strong>{hit.telefono}</strong></p>
      <p className={toHide(hit.fax) ? 'hidden' : ''}>fax <strong>{hit.fax}</strong></p>
      <p className={toHide(hit.codicefiscale) ? 'hidden' : ''}>codice fiscale <strong>{hit.codicefiscale}</strong></p>
      <p className={toHide(hit.codiceistat) ? 'hidden' : ''}>codice ISTAT <strong>{hit.codiceistat}</strong></p>
    </CardText>
  </Card >);
};
*/

const App = () => (

  <MuiThemeProvider theme={theme}>

    <CssBaseline />

    <AppBar className='app-bar' elevation={0} position="static" color="default">

      <Toolbar>

        <Typography variant="headline" className='app-bar-title'>Giustiziasear.ch</Typography>

      </Toolbar>

    </AppBar>

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
  </MuiThemeProvider>
);

const searchBoxStyle = {
  width: "50%",
  marginTop: 30,
  marginLeft: 30,
  marginRight: 30
};

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}

export default App;