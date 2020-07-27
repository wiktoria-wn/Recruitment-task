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

  onIconClick = (e) => {
    this.toggleImage();
    this.showPlanet();
    // var movieId = e.currentTarget.attributes.param.value;
  }

  getImageName = () => this.state.open ? 'openArrow' : 'closeArrow'

  render () {
  return (
    <>
      {MovieDetails.map(details => {
        const movies = details.data.films;
        return (
          <>{movies.map( movie => {
            return (
            <>
            <Title>
              <TitleValue>{movie.title}</TitleValue>
              <Icon>
              <img
                  src={imagesPath[this.getImageName()]} onClick={this.onIconClick} param={movie.id}
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