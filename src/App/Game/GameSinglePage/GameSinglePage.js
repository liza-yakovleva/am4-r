import React from "react"
import '../../../common/style/base.css'
import "./gameSinglePage.css"
import { getGameObject } from '../game_base'
import game_base from '../game_base'
import Testimonials from '../../../Components/Testimonials/Testimonials'
const GameSinglePage =({ match,
  gameObject = getGameObject(game_base), }) => {
  console.log(match)
  const id = match.params.id
   
    return (
     <main className="main">
 <div className="container">
    <div className="row main-row">
     <div className="col-md-12 col-xs-12 pag-main-box">
 
     
   
     <div className="row pag-sort-row">
     <h1 >{gameObject[id].name}</h1>
     </div>
   

     <div className="pag-wrap-block">
       <div className="pag-bl">
     <div className="pag-block"></div>
     </div>
     <div className="pag-game-container">
   <div className="row pag-wrap-main-line">
      <div className="col-md-4 col-xs-4 pag-news pag-news-game">
     <div className="pag-main-name">New</div>
      </div>
     
   </div>

<div className="row pag-game-cards-row">
 
     <div className="pag-game-cards">
        
           <img src="img/main-img1.png" alt="img" className="pag-page-img"/>
      <div className="pag-game-cont-box">
       
        <div className="pag-game-rating">8.2</div>
      <div className="pag-game-name">Evolve</div>
      <div className="pag-descrip-name">PC, PS4, <span className="pag-descrip-name-green">Xbox One</span></div>
      <div className="pag-game-text">Добыча полезных ископаемых на некой планете, похожей на землю, прекращается из-за вмешательства представителей местной фауны. Причем терроризировать буровую установку и рабочих стало что-то очень большое, невиданное ранее.</div>
      <div className="pag-game-ico-box">
        <div className="pag-game-num">24</div>
        <div className="pag-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="pag-game-num">21</div>
        <div className="pag-comment-ico"><i className="far fa-comment-alt"></i></div>
        </div>
          
 </div>
 
           
         
       </div>
 
</div>


  
    </div>
   </div>
   </div>
   </div>
        </div>
        <Testimonials/>
           
</main>


    )
  }
export default GameSinglePage