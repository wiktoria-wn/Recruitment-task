import React from 'react';
import PlanetDetails from '../assets/data.json';
import {Table, Row, Value} from '../PlanetsDataStyles';

class PlanetsData extends React.Component  {

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
      {PlanetDetails.map(el => {
        const planet = el.data.planets;
         return (
          <>{planet.map( i => {
            return (
              <Row>
                <Value primary>{i.name}</Value>
                <Value>{i.rotationPeriod}</Value>
                <Value>{i.orbitalPeriod}</Value>
                <Value>{i.diameter}</Value>
                <Value>{i.climates}</Value>
                <Value>{i.surfaceWater}</Value>
                <Value>{i.population}</Value>
              </Row>

            )
          })}
          </>
         )
      })}
    </Table>
    </>
  );
}
}

export default PlanetsData;