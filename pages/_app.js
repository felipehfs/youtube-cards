import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'next-auth/client';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
  }
  html {
    overflow-x: hidden;
  }
`

const theme = {
  colors: {
    gray: 'hsl(0deg 0% 96%)',
    primary: 'blueviolet',
    secondary: 'red'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
