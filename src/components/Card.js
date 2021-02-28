import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div>
          <img src={this.props.img} alt="links"></img>
        </div>
        <h2>{this.props.title}</h2>
        <h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          temporibus qui architecto corporis deserunt quia nobis? Expedita
          consequuntur, deleniti impedit, dicta atque ratione, eum repudiandae
          voluptas doloribus facere eligendi animi?
        </h4>
      </Link>
    );
  }
}
