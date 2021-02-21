import React, { Component } from "react"
import { Route } from "react-router-dom"
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Slider from "./Slider/Slider"
import Article from "./Article/Article"
import Game from "./Game/Game"
import Trailer from "./Trailer/Trailer"

import '../common/style/reset.css'
import '../common/style/base.css'
import '../common/style/media.css'
class App extends Component {
  render() {
    return (
      <>
            <Route path="/" component={Header} />
            <Route path="/" exact component={Slider} />
        <Route path="/" exact component={Main} />
        <Route path="/article" exact component={Article} />
        <Route path="/game" exact component={Game} />
        <Route path="/trailer" exact component={Trailer} />
        <Route path="/"   component={Footer} />
       
      </>
    );
  }
}
export default App