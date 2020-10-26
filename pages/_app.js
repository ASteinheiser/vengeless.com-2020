import { Provider, useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@material-ui/core/styles'

import lightTheme from '../styles/themes/light-theme'
import darkTheme from '../styles/themes/dark-theme'
import { store, persistor } from '../redux/store'

import 'fontsource-roboto'
import '../styles/globals.css'
import '../styles/layout.css'

function WrappedApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyApp Component={Component} pageProps={pageProps} />
      </PersistGate>
    </Provider>
  )
}

function MyApp({ Component, pageProps }) {
  const { theme } = useStore().getState()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default WrappedApp
