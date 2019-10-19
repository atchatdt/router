import React, { Component } from 'react'
import data from './data.json'

export default class Detail extends Component {
    render() {
      let id = this.props.match.params.id
      let currentData = data.filter(value => value.id == id)
      // console.log(currentData)
      currentData = currentData[0]
        return (
            <div>
            {/* Header */}
            <header className="masthead tin-tuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-1 text-center">Chi tiết Tin tức</h1>
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
            {/* End Header */}

            {/*Detail News */}
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <img src={currentData.img} alt="" width="100%" />
                <h1 className="display-3">Chi tiết tin</h1>
                <p className="lead">{currentData.title}</p>
                <hr className="my-2" />
               <p>{currentData.content} </p>
              </div>
            </div>
            

            {/* Tin liên quan */}
            <div className="container">
              <h4 className="card-title text-center">Tin liên quan</h4>
              <div className="row">
                <div className="card-deck">
                  <div className="card">
                    <a href ="/tin">  <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="" width="100%" /> </a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <a href = "/tin">  <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="" width="100%" /> </a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <a href = "/tin">  <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="" width="100%" /> </a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <a href = "/tin">  <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="" width="100%" /> </a>
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Detail News */}
          </div>
          
        )
    }
}
