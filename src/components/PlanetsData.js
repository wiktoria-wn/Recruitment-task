import React from 'react'
import { Table, Row, Value } from './styles/PlanetsDataStyles'

class PlanetsData extends React.Component {
  render () {
    return (
      <>
        <Table>
          <Row primary>
            <Value  bordered primary>Planet Name</Value>
            <Value bordered>Rotating period</Value>
            <Value bordered>Orbital period</Value>
            <Value bordered>Diameter</Value>
            <Value bordered>Climate</Value>
            <Value bordered>Surface water</Value>
            <Value bordered>Population</Value>
          </Row>
          {this.props.planets.map(planet => {
            return (
              <Row key={planet.id}>
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
        </Table>
      </>
    )
  }
}

export default PlanetsData
