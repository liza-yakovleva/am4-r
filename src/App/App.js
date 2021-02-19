import React, { Component } from "react"
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Slider from "./Slider/Slider"
import '../common/style/reset.css'
import '../common/style/media.css'
import '../common/style/base.css'
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Slider />
        <Main />
        <Footer />
      </>
    );
  }
}
export default App