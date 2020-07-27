/* eslint-disable react/jsx-key */
import React from 'react'
import PlanetDetails from '../assets/data.json'
import { Table, Row, Value } from '../PlanetsDataStyles'

class PlanetsData extends React.Component {
  render () {
    return (
      <>
        <Table>
          <Row primary>
            <Value primary>Planet Name</Value>
            <Value>Rotating period</Value>
            <Value>Orbital period</Value>
            <Value>Diameter</Value>
            <Value>Climate</Value>
            <Value>Surface water</Value>
            <Value>Population</Value>
          </Row>
          {PlanetDetails.map(datails => {
            const planet = datails.data.planets
            return (
              <>{planet.map(planet => {
                return (
                  <Row>
                    <Value primary>{planet.name}</Value>
                    <Value>{planet.rotationPeriod}</Value>
                    <Value>{planet.orbitalPeriod}</Value>
                    <Value>{planet.diameter}</Value>
                    <Value>{planet.climates}</Value>
                    <Value>{planet.surfaceWater}</Value>
                    <Value>{planet.population}</Value>
                  </Row>

                )
              })}
              </>
            )
          })}
        </Table>
      </>
    )
  }
}

export default PlanetsData
