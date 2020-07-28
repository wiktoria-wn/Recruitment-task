import React from 'react'
import { Table, BodyRow, BodyValue, HeadSection, BodySection, HeadRow, HeadValue } from './styles/PlanetsDataStyles'

class PlanetsData extends React.Component {
  render () {
    return (
      <>
        <Table>
          <HeadSection>
          <HeadRow primary>
            <HeadValue  bordered primary>Planet Name</HeadValue>
            <HeadValue bordered>Rotating period</HeadValue>
            <HeadValue bordered>Orbital period</HeadValue>
            <HeadValue bordered>Diameter</HeadValue>
            <HeadValue bordered>Climate</HeadValue>
            <HeadValue bordered>Surface water</HeadValue>
            <HeadValue bordered>Population</HeadValue>
          </HeadRow>
          </HeadSection>
          {this.props.planets.map(planet => {
            return (
              <BodySection>
              <BodyRow key={planet.id}>
                <BodyValue data-title="Planet Name" primary>{planet.name}</BodyValue>
                <BodyValue data-title="Rotating period">{planet.rotationPeriod}</BodyValue>
                <BodyValue data-title="Orbital period">{planet.orbitalPeriod}</BodyValue>
                <BodyValue data-title="Diameter">{planet.diameter}</BodyValue>
                <BodyValue data-title="Climate">{planet.climates}</BodyValue>
                <BodyValue data-title="Surface water">{planet.surfaceWater}</BodyValue>
                <BodyValue data-title="Population">{planet.population}</BodyValue>
              </BodyRow>
              </BodySection>
            )
          })}
        </Table>
      </>
    )
  }
}

export default PlanetsData
