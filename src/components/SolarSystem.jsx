import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((e) => (
          <PlanetCard planetName={ e.name } planetImage={ e.image } key={ e.name } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
