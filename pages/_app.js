import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import 'fontsource-roboto'

import '../styles/globals.css'
import '../styles/layout.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7129bf'
    },
    secondary: {
      main: '#7c7c7c'
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
