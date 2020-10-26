import { useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@material-ui/core/styles'

import lightTheme from '../styles/themes/light-theme'
import darkTheme from '../styles/themes/dark-theme'
import { store, persistor } from '../redux/store'

import 'fontsource-roboto'
import '../styles/globals.css'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Component toggleTheme={toggleTheme} {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
