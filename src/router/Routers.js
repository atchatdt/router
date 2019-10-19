import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

import Home from '../Components/Home'
import News from '../Components/News'
import Contact from '../Components/Contact'
import Detail from '../Components/Detail'
export default class Routers extends Component {
    render() {
        return (
           
      <div>
       
          {/* Tạm thời dùng cách này, cách mới dùng sau */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/tin" component={News}/>
        <Route exact path="/tin-tuc/:slug.:id.html" component={Detail}/>
        <Route exact path="/lien-he" component={Contact}/>
      </div>
   
        )
    }
}
