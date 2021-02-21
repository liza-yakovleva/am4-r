
import React from "react"
import { Link } from "react-router-dom"

import '../../common/style/base.css'
import './media.css'
import "./game.css"

const Game =()=> {
    return (

 <div className="container">
    <div className="row main-row">
     <div className="col-md-12 col-xs-12 main-box">
        <div className="row sort-row">
             <div className="col-md-6 col-xs-5">

     </div>
            <div className="col-md-6 col-xs-7 main-sort">
             <div className="col-md-4 col-xs-4">
       <p className="sort-name">Сортировать:</p>
       </div>
              <div className="col-md-4 col-xs-4 btn-popular">
       <button className="popular">Популярные</button>
       </div>
              <div className="col-md-4 col-xs-4">
       <button className="new">Новые</button>
       </div>
              </div>
         </div>
         <div className="wrap-block">
       <div className="bl">
     <div className="block"></div>
     </div>
     <div className="game-container">
   <div className="row wrap-main-line">
      <div className="col-md-2 col-xs-2 news news-game">
     <div className="main-name">Игры</div>
      </div>
      <div className="col-md-1 col-xs-1 news">
     <div className="name-noties-box"><div className="name-noties">Все новости</div></div>
    </div>
       <div className="col-md-7 col-xs-7 main-choice-cont">
         <div className="main-dots pagination dots-pagin">
           <ul>
             <Link to="/">
               <li></li>
             </Link>
             <Link to="/">
               <li></li>
             </Link>
             <Link to="/">
               <li></li>
             </Link>
             <Link className="is-active" to="/">
               <li></li>
             </Link>
             <Link to="/">
               <li></li>
             </Link>
           </ul>
         </div>
         <div className="pagination slide-arrow">
           <ul>
             <Link className="is-active" to="/">
               <li>
                 prev</li> </Link> <Link to="/">
               <li>next</li>
             </Link>
           </ul>
         </div>
       </div>
   </div>

<div className="row game-cards-row">
     <div className="game-cards">
        <Link to="../new-pages/new-pages2.html" className="card-game">
           <img src="img/main-img1.png" alt="img"/>
      <div className="game-cont-box">
       
        <div className="game-rating">8.2</div>
      <div className="game-name">Evolve</div>
      <div className="descrip-name">PC, PS4, <span className="descrip-name-green">Xbox One</span></div>
      <div className="game-text">Добыча полезных ископаемых на некой планете, похожей на землю, прекращается из-за вмешательства представителей местной фауны. Причем терроризировать буровую установку и рабочих стало что-то очень большое, невиданное ранее.</div>
      <div className="game-ico-box">
        <div className="game-num">24</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">21</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
        </div>
          
 </div>
</Link>
            <Link to="../new-pages/new-pages.html" className="card-game">
                          <img src="img/main-img2.png" alt="img" />
      <div className="game-cont-box">
        <div className="game-rating">9.5</div>
      <div className="game-name">Dragon Age: Inquisition</div>
      <div className="descrip-name">PC, PS4, <span className="descrip-name-green">Xbox One,</span> PS3,<span className="descrip-name-green"> Xbox 360</span></div>
      <div className="game-text">Когда небеса буквально развернутся над смертными, на землю ступит хаос. Тедас и так является землей раздора, где постоянно бушует война, поглощающая все больше жизней. Теперь на ее счету будут и души, поскольку демоны и их приспешники уже...</div>
      <div className="game-ico-box">
        <div className="game-num">94</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">57</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
          </div>
           </div>
</Link>

           <Link to="../new-pages/new-pages2.html" className="card-game">
                <img src="img/main-img3.png" alt="img"/>
      <div className="game-cont-box">
        <div className="game-rating">9.9</div>
      <div className="game-name">Grand Theft Auto 5</div>
      <div className="descrip-name">PC, PS4, <span className="descrip-name-green"> Xbox One,</span> PS3, <span className="descrip-name-green">Xbox 360</span></div>
      <div className="game-text">По сравнению с предыдущими играми серии в Grand Theft Auto 5 куда больше всякого рода «настроек» и вариантов кастомизации. Заметно преобразилась боевая система, а горожане теперь могут вызывать полицию. В пятой части мы сможем ходить на йогу, кататься на мотоциклах и играть в гольф.</div>
      <div className="game-ico-box">
        <div className="game-num">74</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">41</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
          </div>
            </div>
</Link>
 
             <Link to="../new-pages/new-pages.html" className="card-game">
              <img src="img/main-img4.png" alt="img"/>
      <div className="game-cont-box">
        <div className="game-rating">7.9</div>
      <div className="game-name">Dying Light</div>
      <div className="descrip-name">PC, PS4, <span className="descrip-name-green">Xbox One</span></div>
      <div className="game-text">Dying Light – триллер от первого лица, события которого происходят на просторах огромного и опасного мира. В течение светового дня вам предстоит путешествовать по руинам городов, разыскивать припасы, создавать оружие. Ночью же охотники превращаются в добычу, ведь это времякогда на улицах господствуют жертвы эпидемии.</div>
      <div className="game-ico-box">
        <div className="game-num">74</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">41</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
          </div>
            </div>
            </Link>
       </div>
</div>


  
    </div>
   </div>
   </div>
   </div>
 </div>
)
  }
export default Game
 