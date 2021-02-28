import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class BeerCard extends Component {
  render() {
    const { image_url, name, tagline, _id,contributed_by} = this.props.beer;
    return (
      <Link  to={{pathname:`/beers/${_id}`, beer: this.props.beer }}>
      <div className="column">
        <div>
          <img src={image_url} alt={name}></img>
        </div>
        <div>
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <h5>Created by: {contributed_by}</h5>
        </div>
      </div></Link>
    );
  }
}
