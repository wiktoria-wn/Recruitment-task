import React from 'react'
import MoviesData from './components/MoviesData'
import { MainContent } from './MovieDataStyles'
import Logo from './assets/LOGO.svg'
import PlanetsData from './components/PlanetsData'

function App () {
  return (
    <MainContent>
      <img src={Logo}/>
      <MoviesData/>
      <PlanetsData/>
    </MainContent>
  )
}

export default App
