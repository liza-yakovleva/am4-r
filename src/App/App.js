import React from "react"
import { Route } from "react-router-dom"
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Slider from "./Slider/Slider"
import Trailer from "./Trailer/Trailer"
import Article from "./Article/Article"
import Game from "./Game/Game"
import ArticleSinglePage from "./Article/ArticleSinglePage/ArticleSinglePage"
import TrailerSinglePage from "./Trailer/TrailerSinglePage/TrailerSinglePage"
import GameSinglePage from "./Game/GameSinglePage/GameSinglePage"


import '../common/style/reset.css'
import '../common/style/base.css'
const App = () => {
  
    
    return (
      <>
        <Route path="/"  component={Header}/>

           
            <Route path="/" exact component={Slider} />
        <Route path="/" exact component={Main} />
        <Route path="/article" exact component={Article} />
        <Route path="/article/:id" exact component={ArticleSinglePage}/>
        <Route path="/game" exact component={Game} />
        <Route path="/game/:id" exact component={GameSinglePage} />
        <Route path="/trailer" exact component={Trailer} />
        <Route path="/trailer/:id" exact component={TrailerSinglePage} />
        <Route path="/"   component={Footer} />
      
      </>
    );
  
}
export default App