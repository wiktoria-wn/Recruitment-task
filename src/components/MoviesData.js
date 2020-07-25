import React from 'react';
import MovieDetails from '../assets/data.json';
import {Title, TitleValue, Icon} from '../MovieDataStyles';
import ArrowOpen from '../assets/ARROWOPEN.svg';
import ArrowClose from '../assets/ARROWCLOSE.svg';
import PlanetsData from './PlanetsData';

const imagesPath = {
  openArrow: ArrowOpen,
  closeArrow: ArrowClose
}

class MoviesData extends React.Component  {

  constructor () {
  super()
  this.state = {
    open: true,
    showDetails: false
  }
}

  showPlanet = () => { 
    this.setState(state => ({showDetails: !state.showDetails}))
  }

  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }
  
  getImageName = () => this.state.open ? 'openArrow' : 'closeArrow'

  render () {
    const imageName = this.getImageName();
  return (
    <>
      {MovieDetails.map(el => {
        const movie = el.data.films;
        return (
          <>{movie.map( i => {
            return (
            <>
            <Title>
              <TitleValue>{i.title}</TitleValue>
              <Icon>
              <img
                src={imagesPath[imageName]} onClick={this.toggleImage && this.showPlanet}
              />
              </Icon>
            </Title>
            {this.state.showDetails ? <PlanetsData/> : null}
            </>
            )
          })}
          </>
        )
      })}
    </>
  );
}
}

export default MoviesData;