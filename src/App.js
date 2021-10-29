import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Error404 from './components/Error404';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';

import Homepage from './Pages/Homepage';

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    },
  }));
  // define object of use style
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} />

          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
