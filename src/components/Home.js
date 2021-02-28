import React, { Component } from 'react'
import Card from "./Card"
export default class Home extends Component {
    render() {
        return (
            <div>

                <Card link="/beers" title="All Beers" img="assets/beers.png"/>
                <Card link="/beers/random" title="Random Beer" img="assets/random-beer.png"/>
                <Card link="/new-beer" title="New Beer" img="assets/new-beer.png"/>
            </div>
        )
    }
}
