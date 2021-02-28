import React, { Component } from 'react'
import Header from './Header'
import axios from "axios"
import BeerCard from './BeerCard'



export default class Beers extends Component {


    state = {
        beers: []
      }
    
      componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
          .then((response) => {
            this.setState({ beers: response.data})
          })
          .catch(() => {
            console.log('Fecthing failed')
          })
      }
    render() {
        return (
            <div>
            <Header/>
            {
                this.state.beers.map((beer,index)=>{
                return (<BeerCard key={index} beer={beer}/>)
            })
            }
            
                
            </div>
        )
    }
}
