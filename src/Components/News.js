import React, { Component } from 'react'
import NewItem from './NewItem'

import data from './data.json'

export default class News extends Component {
    render() {
        return (
            <div>
            {/* Header */}
            <header className="masthead tin-tuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-1 text-center">Danh sách Tin tức</h1>
                      {/*<a href="detail.html#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                    </div>
                  </div>
                  <div className="col-lg-5 my-auto">
                    <div className="device-container">
                      <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                          <div className="screen">
                            {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                            {/* <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" class="img-fluid" alt=""> */}
                          </div>
                          <div className="button">
                            {/* You can hook the "home button" to some JavaScript events or just remove it */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
           
            <div className="container">
              <div className="row mt-3">

              {data.map ( (value,key) => 
              
              <NewItem title = {value.title}
              img = {value.img}
              quote = {value.quote}
              key = {key}
              idnew ={value.id}
              >

              </NewItem>
              )
              }
            </div>
            {/* End News */}
          </div>
          </div>
          
        )
    }
}
