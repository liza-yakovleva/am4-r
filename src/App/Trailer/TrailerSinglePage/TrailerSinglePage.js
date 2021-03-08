import React from "react"
import '../../../common/style/base.css'
import "./trailerSinglePage.css"
import { getTrailerObject } from '../trailer_base'
import trailer_base from '../trailer_base'
import Testimonials from '../../../Components/Testimonials/Testimonials'
import Player from './../../../Components/Player/Player'
const TrailerSinglePage =({ match,
  trailerObject = getTrailerObject(trailer_base), }) => {
  console.log(match)
  const id = match.params.id
   
    return (
     <main className="main">
 <div className="container">
    <div className="row main-row">
     <div className="col-md-12 col-xs-12 pag-main-box">
 
     
   
     <div className="row pag-sort-row">
     
     </div>
   

     <div className="pag-wrap-block">
       <div className="pag-bl">
     <div className="pag-block"></div>
     </div>
     <div className="pag-game-container">
   <div className="row pag-wrap-main-line">
      <div className="col-md-4 col-xs-4 pag-news pag-news-game">
     <div className="pag-main-name"><h1 >{trailerObject[id].name}</h1></div>
      </div>
     
   </div>

<div className="row pag-game-cards-row">
 
     <div className="pag-game-cards">
                      <Player url={trailerObject[id].url}/>
           
      <div className="pag-game-cont-box">
       
        <div className="pag-game-rating">8.2</div>
      <div className="pag-game-name">{trailerObject[id].name}</div>
      <div className="pag-descrip-name">PC, PS4, <span className="pag-descrip-name-green">{trailerObject[id].description}</span></div>
      <div className="pag-game-text">{trailerObject[id].long_text}</div>
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
        <Testimonials />
    </main>
    )      
  }
export default TrailerSinglePage