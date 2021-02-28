import React, { Component } from 'react'
import axios from "axios"
import BeerDetails from './BeerDetails'
import Header from './Header'


export default class Beer extends Component {

    state = {
        beer: {}
      }
    
      componentDidMount(){

       let beerId = this.props.match.params.beerId
       axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
       .then((response) => {
         console.log("beerReceived", response.data)
         this.setState({ beer: response.data})
       })
       .catch(() => {
         console.log('beer Fecthing failed')
       })
   }


    render() {
        return (<>
             <Header/>
          <BeerDetails beer={this.state.beer}/>
        </>
       )
    }
}