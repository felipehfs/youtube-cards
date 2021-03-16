import { createGlobalStyle, ThemeProvider } from 'styled-components'

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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
