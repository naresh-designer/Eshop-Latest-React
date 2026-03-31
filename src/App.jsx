
import { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
// const Container = lazy(() => import('./Components/Container/Container'))
import Container from './Components/Container/Container'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/Styled/Globalstyle'
const Header = lazy(() => import('./Components/Header/Header'))
const Footer = lazy(() => import('./Components/Footer/Footer'))
// import Header from './Components/Header/Header'

const App = () => {
  const theme = {
    common: {
      orangeBg: "#936e53",
      bg: "#f1eeea",
      greenBg: "#8bc34a",
      headingBg: "#000",
      fontColor: "#ccc",
      grayColor: "hotpink",
      blackColor: "#000000",
      whiteColor: "#fff",
      merriweatherFont: '"Josefin Sans", system-ui',
      orangeColor: "#ba9173",
      fontWeight: "normal",
    },
    mobile: {
      smallM: "500px",
      tab: "768px",
    },
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter basename="/work/shop/">
          <Header/>
          <Container/>
          <Footer/>
        </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App