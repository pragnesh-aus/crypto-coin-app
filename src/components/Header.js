import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { Offline, Online } from 'react-detect-offline';
import { OfflineText, polling } from '../config/constants';
const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  global: {
    flex: 2,
    fontFamily: 'Montserrat',
    cursor: 'pointer',
  },
}));

const Header = () => {
  const classes = useStyles();
  // history hooks from react router dom
  const history = useHistory();
  // dark theme from Material UI

  const { currency, setCurrency } = CryptoState();
  //console.log(currency);
  //const [currency, setCurrency] = useState();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push('/')}
              className={classes.title}
              variant="h6"
            >
              Crypto Coin App
            </Typography>

            <Typography
              variant="h6"
              style={{
                fontFamily: 'Montserrat',
                marginRight: '1%',
                marginLeft: '1%',
              }}
            >
              CoinGecko API Status :{' '}
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: 'Montserrat',
                marginRight: '1%',
                fontWeight: 'bold',
              }}
            >
              <Online polling={polling}>
                <span
                  style={{
                    fontFamily: 'Montserrat',
                    color: 'green',
                  }}
                >
                  Online
                </span>
              </Online>
              <Offline polling={polling}>
                <span
                  style={{
                    fontFamily: 'Montserrat',
                    color: 'red',
                  }}
                >
                  {OfflineText}
                </span>
              </Offline>
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'AUD'}>AUD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
