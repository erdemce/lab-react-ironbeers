import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

export default class NewBeer extends Component {
  state = {
    showForm: true,
    message: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
    };

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {
        this.setState({
          showForm: false,
          message: response.data.message,
        });
      })
      .catch(() => {
        this.setState({
          showForm: true,
          message: 'Oppps Please try again',
        });
      });
  };

  render() {
    if (this.state.showForm) {
      return (
        <div>
          <Header />
          <h3 className="err">{this.state.message}</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" required></input>
            <label>Tagline</label>
            <input type="text" name="tagline" required></input>
            <label>Description</label>
            <textarea rows="4" name="description" required></textarea>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" required></input>
            <label>Brewers Tips</label>
            <input type="text" name="brewers_tips" required></input>
            <label>Attenuation Level</label>
            <input
              type="number"
              name="attenuation_level"
              min="1"
              defaultValue="1"
              required
            ></input>
            <label>Contributed By</label>
            <input type="text" name="contributed_by" required></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <h3 className="err">{this.state.message}</h3>
        </div>
      );
    }
  }
}
