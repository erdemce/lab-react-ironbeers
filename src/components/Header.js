import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">

                <Link to="/"><h1>Home</h1></Link>
            </div>
        )
    }
}
