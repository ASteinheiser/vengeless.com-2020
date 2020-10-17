import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import lightTheme from '../styles/themes/light-theme'
import darkTheme from '../styles/themes/dark-theme'

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Component toggleTheme={toggleTheme} {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
