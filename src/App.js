import React from 'react'
import MoviesData from './components/MoviesData'
import { Container } from './MovieDataStyles'
import Logo from './assets/LOGO.svg'
import PlanetsData from './components/PlanetsData'

function App () {
  return (
    <Container>
      <img src={Logo}/>
      <MoviesData/>
      <PlanetsData/>
    </Container>
  )
}

export default App
