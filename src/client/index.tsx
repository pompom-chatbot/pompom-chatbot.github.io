import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Theme, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import store from './store'
import Favicon from './components/favicon'
import LandingPage from './components/landing-page'

const theme:Theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: 'rgb(34, 39, 51)',
      secondary: 'white'
    },
    primary: {
      light: 'rgb(97, 97, 97)',
      main: 'rgb(66, 66, 66)',
      dark: 'rgb(33, 33, 33)',
      contrastText: 'white'
    },
    background: {
      paper: 'rgb(255, 255, 255)'
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Favicon/>
      <LandingPage/>
    </ThemeProvider>
  </Provider>
, document.getElementById('root'))