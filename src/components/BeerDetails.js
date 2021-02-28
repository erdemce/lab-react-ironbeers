import React, { Component } from 'react';

export default class BeerDetails extends Component {
  render() {
    const {
      image_url,
      name,
      tagline,
      contributed_by,
      first_brewed,
      attenuation_level,
      description,
    } = this.props.beer;
    return (
      <div className="details">
        <img src={image_url} alt="name"></img>
        <div>
          <div className="column-space-between">
            <h2>{name}</h2>
            <h2>{attenuation_level}</h2>
          </div>
          <div className="column-space-between">
            <h4>{tagline}</h4>
            <h4>{first_brewed}</h4>
          </div>
          <h4>{description}</h4>
          <h5>{contributed_by}</h5>
        </div>
      </div>
    );
  }
}
