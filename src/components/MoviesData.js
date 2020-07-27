import React from 'react'
import MovieDetails from '../assets/data.json'
import { Title, TitleValue, Icon } from './styles/MovieDataStyles'
import ArrowOpen from '../assets/ARROWOPEN.svg'
import ArrowClose from '../assets/ARROWCLOSE.svg'
import PlanetsData from './PlanetsData'

const imagesPath = {
  openArrow: ArrowOpen,
  closeArrow: ArrowClose
}

class MoviesData extends React.Component {
  constructor () {
    super();
    this.state = {
      films: this.parseFilmsJson(),
      openSections: {}
    }
  }

  parseFilmsJson = () => {
    var films = []

    var allFilms = MovieDetails.data.films;
    var allPlanets = MovieDetails.data.planets;

    allFilms.forEach(film => {
      const planets = allPlanets.filter(function (planet) {
        return planet.filmConnection.films.find((el) => { return el.id === film.id })
      });
      films.push({
        id: film.id,
        title: film.title,
        planets: planets
      });
    });

    return films;
  }

  onSectionClick = (movieId) => {
    this.setState({openSections: {
      [movieId]: this.state.openSections[movieId] ? false : true
    }});
  }

  getImageName = (filmId) => this.shouldDisplay(filmId) ? 'closeArrow' : 'openArrow'

  shouldDisplay = (movieId) => this.state.openSections[movieId] ? true : false;

  render () {
    return (
      <>
        {this.state.films.map(film => {
          return (
              <div key={film.id}>
              <Title onClick={() => this.onSectionClick(film.id)}>
                  <TitleValue key="film">{film.title}</TitleValue>
                  <Icon
                      src={imagesPath[this.getImageName(film.id)]}
                      alt="movie"
                  />
                </Title>
                {this.shouldDisplay(film.id) ? <PlanetsData planets={film.planets}/> : null}
              </div>
            )
        })}
      </>
    )
  }
}

export default MoviesData
